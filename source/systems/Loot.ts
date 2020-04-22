import { collisionDetect } from '../Helper';
import { TAGS, EVENTS } from '../Constants';

const Loot = (entities, { dispatch }) => {
  const { player } = entities;

  Object.keys(entities).map((id) => {
    if (
      entities.hasOwnProperty(id) &&
      entities[id].tags.includes(TAGS.DROPPED_ITEM)
    ) {
      const item = entities[id];

      const playerPos = {
        ...player.body.position,
        ...player.body.size,
      };

      const itemPos = {
        ...item.body.position,
        ...item.body.size,
      };

      const collision = collisionDetect(playerPos, itemPos);
      if (collision) {
        delete entities[id];
        dispatch({ type: EVENTS.DROP_LOOT, value: item.item });
      }
    }
  });

  return entities;
};

export default Loot;
