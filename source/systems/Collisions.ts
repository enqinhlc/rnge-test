import { checkDistanceBetweenPoints } from '../Helper';
import { TAGS } from '../Constants';

const Collisions = (entities, {}) => {
  const { player } = entities;
  const playerPos = {
    ...player.body.position,
    ...player.body.size,
  };

  const playerCollisionOptions = {
    position: {
      x: playerPos.x + playerPos.width / 2,
      y: playerPos.y + playerPos.height / 2,
    },
  };

  Object.keys(entities).map((id) => {
    if (
      entities.hasOwnProperty(id) &&
      entities[id].tags.includes(TAGS.MONSTER)
    ) {
      const monster = entities[id];
      const monsterPos = {
        ...monster.body.position,
        ...monster.body.size,
      };

      const monsterCollisionOptions = {
        position: {
          x: monsterPos.x + monsterPos.width / 2,
          y: monsterPos.y + monsterPos.height / 2,
        },
      };

      entities[id].distance = checkDistanceBetweenPoints(
        playerCollisionOptions,
        monsterCollisionOptions,
      );
    }
  });

  return entities;
};

export default Collisions;
