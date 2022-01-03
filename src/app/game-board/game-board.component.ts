import { Component, OnInit } from '@angular/core';
import { getSpriteConfig } from '../shared/sprite-mapping';
import { maps } from '../shared/map';
import { loadSprites } from './../shared/sprite-mapping';
import { addCharacter, loadCharacter } from '../shared/character';
import { loadEvilMushroom } from './../shared/evil-shroom';
import { loadTurtle } from './../shared/turtle';

const BASE_SCALE = 2;
const MUSHROOM_SPEED = 50;

export interface GameOption {
  level: string;
  score: number;
  isBig: boolean;
}
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  gameBoard: any;
  score = 0;
  scoreLabel: any;

  constructor() { }

  ngOnInit(): void {
    this.init();
    loadEvilMushroom();
    loadTurtle();
    loadCharacter();
    loadSprites();
    this.addScene();
  }

  // Init game board
  init(): void {
    kaboom({
      width: window.innerWidth,
      height: window.innerHeight,
      background: [0, 0, 0, 1]
    });
  }

  addScene(): void {
    scene('game', (gameConfig: GameOption) => {
      this.addLayer();
      this.scoreLabel = add([
        text(String(gameConfig.score).padStart(3, '0')),
        scale(BASE_SCALE / 2),
        pos(850, 200),
        area(),
        layer('ui'),
        {
          value: gameConfig.score
        }
      ]);
      const config = getSpriteConfig(BASE_SCALE, this.scoreLabel);
      const map = maps[gameConfig.level];
      this.gameBoard = addLevel(map, config);
      const player = addCharacter(gameConfig.isBig, 80, 0, this.gameBoard, this.scoreLabel);
      this.mushroomWalk();
    });
    go('game', { level: 'level1', score: 0, isBig: false });
  }

  addLayer(): void {
    return layers(['bg', 'obj', 'ui'], 'obj');
  }

  mushroomWalk(): void {
    action('mushroom', (m: any) => {
      m.move(MUSHROOM_SPEED, 0);
    });
  }
}
