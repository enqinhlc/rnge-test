import { BACKWALL_Y, TAGS } from '../Constants';
import { generateRandomPoint } from '../Helper';

const MoveEnemy = (entities, {}) => {
  Object.keys(entities).map((id) => {
    if (entities[id].tags.includes(TAGS.ENEMY)) {
      const enemyShip = entities[id].body;
      if (enemyShip.position.y < BACKWALL_Y) {
        // Matter.Body.translate(enemyShip, {
        //   x: 0.0,
        //   y: 1,
        // });
      } else {
        const { x, y } = generateRandomPoint();
        entities[id].position = [x, y];
      }
    }
  });

  return entities;
};

export default MoveEnemy;
