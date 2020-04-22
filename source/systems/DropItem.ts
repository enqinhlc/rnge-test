import { IMAGE_DROP_SIZE, EVENTS, TAGS } from '@source/Constants';
import Images from '../../assets/images/index';
import DropedItem from '@entities/DropedItem';
import { randomRange } from '@source/Helper';

const DropItem = (entities, { events }) => {
  if (events.length) {
    events
      .filter((t) => t.type === EVENTS.DROP_ITEM)
      .map((event) => {
        const itemKeys = Object.keys(Images.items);
        const randomItemKeyIndex: number = randomRange(0, itemKeys.length - 1);
        const itemIndex = itemKeys[randomItemKeyIndex];
        const item = Images.items[itemIndex];

        const itemName = `ITEM[${item.itemId}]`;

        entities[itemName] = {
          body: { position: { x: event.x, y: event.y } },
          item,
          renderer: DropedItem,
          tags: [TAGS.DROPPED_ITEM],
        };
      });
  }

  return entities;
};

export default DropItem;
