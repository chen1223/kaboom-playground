import { evilShroom, evilShroomWalk } from '../shared/evil-shroom';
import { turtle, turtleWalk } from './turtle';

declare const origin: any;
export function loadSprites(): void {
  // loadSprite('coin', '/assets/img/coin.png');
  // loadSprite('brick', '/assets/img/brick.png');
  // loadSprite('brick', '/assets/img/world.png', { sliceX: 8, sliceY: 8, x: 3, y: 0, width: 128, height: 128 });
  loadSpriteAtlas('/assets/img/items.png', {
    'coin': {
      x: 0,
      y: 16,
      sliceX: 4,
      sliceY: 3,
      width: 80,
      height: 48
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'brick': {
      x: 48,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'block': {
      x: 32,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'unboxed': {
      x: 32,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'question': {
      x: 64,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'pipe-tl': {
      x: 96,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'pipe-tr': {
      x: 112,
      y: 0,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'pipe-bl': {
      x: 96,
      y: 16,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSpriteAtlas('/assets/img/world.png', {
    'pipe-br': {
      x: 112,
      y: 16,
      sliceX: 8,
      sliceY: 8,
      width: 128,
      height: 128
    }
  });
  loadSprite('mushroom', '/assets/img/mushroom.png');
}

export function getSpriteConfig(BASE_SCALE: number, scoreLabel: any) {

  return {
    width: 32,
    height: 32,
    '=': () => [sprite('brick'), solid(), area(), scale(BASE_SCALE), 'brick'],
    '*': () => [sprite('block'), solid(), area(), scale(BASE_SCALE)],
    'u': () => [sprite('unboxed'), solid(), area(), scale(BASE_SCALE)],
    '[': () => [sprite('pipe-bl'), solid(), area(), scale(BASE_SCALE)],
    ']': () => [sprite('pipe-br'), solid(), area(), scale(BASE_SCALE)],
    '<': () => [sprite('pipe-tl'), solid(), area(), scale(BASE_SCALE), 'pipe'],
    '>': () => [sprite('pipe-tr'), solid(), area(), scale(BASE_SCALE), 'pipe'],
    '$': () => [sprite('coin'), solid(), area({ width: 16, height: 16 }), scale(BASE_SCALE), 'coin'],
    ':': () => [sprite('question'), solid(), area(), scale(BASE_SCALE), 'coin-gift'],
    ';': () => [sprite('question'), solid(), area(), scale(BASE_SCALE), 'mushroom-gift'],
    '^': () => [sprite('mushroom'), solid(), area(), body(), scale(BASE_SCALE), 'mushroom'],
    'v': () => [
      sprite('evil-mushroom'),
      solid(),
      area({ width: 16, height: 16 }),
      body(),
      scale(BASE_SCALE),
      origin('bot'),
      evilShroom(),
      evilShroomWalk(),
      'evil-mushroom'
    ],
    't': () => [
      sprite('turtle'),
      solid(),
      area({ width: 16, height: 24, offset: { x: -10, y: 0 } }),
      body(),
      scale(BASE_SCALE),
      origin('bot'),
      turtle(),
      turtleWalk(50, -1, scoreLabel),
      'turtle'
    ]
  };
};
