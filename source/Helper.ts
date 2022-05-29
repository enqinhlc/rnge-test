import {
  MAX_HEIGHT,
  PLAYER_SAFE_DISTANCE,
  MAX_WIDTH,
  ENEMY_SIZE,
} from './Constants';
import tiles from '../assets/tiles';

export const randomRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomPoint = (
  x1: number,
  x2: number,
  y1: number,
  y2: number,
) => {
  const maxY: number = MAX_HEIGHT - ENEMY_SIZE - PLAYER_SAFE_DISTANCE - 10;
  const maxX: number = MAX_WIDTH - ENEMY_SIZE - 10;

  let x = randomRange(10, maxX);
  let y = randomRange(10, maxY);

  if (x1 > 0 && x2 > 0) {
    x = randomRange(x1, x2);
  }

  if (y1 > 0 && y2 > 0) {
    y = randomRange(y1, y2);
  }

  return { x, y };
};

export const collisionDetect = (bodyA, bodyB) => {
  return (
    bodyA.x < bodyB.x + bodyB.width &&
    bodyA.x + bodyA.width > bodyB.x &&
    bodyA.y < bodyB.y + bodyB.height &&
    bodyA.y + bodyA.height > bodyB.y
  );
};

export const randomColor = () => {
  const R = randomRange(0, 255);
  const G = randomRange(0, 255);
  const B = randomRange(0, 25);

  return `rgb(${R},${G},${B})`;
};

export const checkCircleCollision = (bodyA, bodyB, distance) => {
  const distanceX = bodyA.position.x - bodyB.position.x;
  const distanceY = bodyA.position.y - bodyB.position.y;
  const radiusSum = bodyA.radius + bodyB.radius;
  return (
    distanceX * distanceX + distanceY * distanceY <=
    radiusSum * radiusSum + distance * distance
  );
};

export const checkDistanceBetweenPoints = (bodyA, bodyB) => {
  const distanceX = bodyA.position.x - bodyB.position.x;
  const distanceY = bodyA.position.y - bodyB.position.y;

  return Math.floor(Math.sqrt(distanceX * distanceX + distanceY * distanceY));
};

export const calculateSkillDamage = ({ damage, attack }) => {
  return damage * attack;
};

export const TileRender = (tileId: number) => {
  switch (tileId) {
    case 1:
      return tiles.knight;
    case 2:
      return tiles.grass2;
    case 3:
      return tiles.grass3;
    case 8:
      return tiles.hero;
    case 9:
      return tiles.npc;
  }
};
