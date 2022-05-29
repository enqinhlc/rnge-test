import { EVENTS, PLAYER_SIZE } from '@source/Constants';
import Camera from '@source/classes/Camera';

export default (entities, { events }) => {
  events
    .filter((e) => e.type === EVENTS.PLAYER_MOVE)
    .map((event) => {
      const { direction } = event;

      if (direction === 'N') {
        entities.player.body.position.y -= PLAYER_SIZE;
        Camera.updateOffset(0, -PLAYER_SIZE);
      }
      if (direction === 'S') {
        entities.player.body.position.y += PLAYER_SIZE;
        Camera.updateOffset(0, PLAYER_SIZE);
      }
      if (direction === 'W') {
        entities.player.body.position.x -= PLAYER_SIZE;
        Camera.updateOffset(-PLAYER_SIZE, 0);
      }
      if (direction === 'E') {
        entities.player.body.position.x += PLAYER_SIZE;
        Camera.updateOffset(PLAYER_SIZE, 0);
      }
    });

  return entities;
};
