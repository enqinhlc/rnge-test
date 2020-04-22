import Monster from '@entities/Monster';
import { generateRandomPoint, checkDistanceBetweenPoints } from '../Helper';
import {
  MAX_WIDTH,
  PLAYER_SIZE,
  MAX_ENEMY_COUNT,
  TAGS,
  ANIMATIONS,
  MONSTER_SIZE,
} from '../Constants';
import Entitiy, { Entitity } from '@source/classes/Entitiy';

const CreateMonster = (entities: { [key: string]: Entitity }, {}) => {
  const { player, gameStore } = entities;
  const { monsterInsertedCount } = gameStore;

  const playerCollisionOptions = {
    position: {
      x: player.body.position.x + PLAYER_SIZE / 2,
      y: player.body.position.y + PLAYER_SIZE / 2,
    },
  };

  const monsterLength = Object.keys(entities).filter((id) =>
    entities[id].tags.includes(TAGS.MONSTER),
  ).length;

  if (monsterLength < MAX_ENEMY_COUNT) {
    const { x, y } = generateRandomPoint(
      MAX_WIDTH * 0.25,
      MAX_WIDTH * 0.75,
      10,
      150,
    );

    const monsterCollisionOptions = {
      position: { x, y },
    };

    const custom = {
      level: 1,
      damage: 0.1,
      health: 100,
      activeSkills: [],
      animation: ANIMATIONS.DEMON.IDLE,
      distance: checkDistanceBetweenPoints(
        playerCollisionOptions,
        monsterCollisionOptions,
      ),
    };

    const newMonsterId = `${TAGS.MONSTER}_${monsterInsertedCount}`;
    const createdMonster = Entitiy.create({
      id: newMonsterId,
      body: {
        label: newMonsterId,
        position: { x, y },
        bounds: { x: 0, y: 0 },
        size: { width: MONSTER_SIZE, height: MONSTER_SIZE },
      },
      tags: [TAGS.MONSTER],
      renderer: Monster,
      ...custom,
    });

    entities[newMonsterId] = createdMonster;
    entities.gameStore.monsterInsertedCount++;
  }

  return entities;
};

export default CreateMonster;
