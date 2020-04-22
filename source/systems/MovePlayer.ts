import {
  MAX_WIDTH,
  PLAYER_SIZE,
  MAX_HEIGHT,
  EVENTS,
  ANIMATIONS,
} from '../Constants';

const MovePlayer = (entities, { events, touches }) => {
  if (events.length) {
    const { player } = entities;
    events
      .filter(({ type }) => type === EVENTS.JOYSTICK_MOVE)
      .map((event) => {
        if (
          (player.body.position.x > 5 || event.value.x > 0) &&
          (player.body.position.x < MAX_WIDTH - PLAYER_SIZE - 5 ||
            event.value.x < 0) &&
          (player.body.position.y > 5 || event.value.y > 0) &&
          (player.body.position.y < MAX_HEIGHT - PLAYER_SIZE - 5 ||
            event.value.y < 0)
        ) {
          entities.player.body.position.x += event.value.x;
          entities.player.body.position.y += event.value.y;
          entities.player.body.bounds.x += -event.value.x;
          entities.player.body.bounds.y += -event.value.y;

          entities.player.animation = ANIMATIONS.PLAYER.WALK;
          entities.gameStore.mapBound.x += -event.value.x;
          entities.gameStore.mapBound.y += -event.value.y;
          entities.map.body.position.x += -event.value.x;
          entities.map.body.position.y += -event.value.y;

          Object.keys(entities)
            // .filter((t) => entities[t].tags.includes(TAGS.MONSTER))
            .map((id) => {
              entities[id].body.bounds.x += event.value.x;
              entities[id].body.bounds.y += event.value.y;
            });
        }
      });

    const stopEvents = events.filter(({ type }) => type === EVENTS.PLAYER_STOP);
    if (stopEvents.length) {
      entities.player.animation = ANIMATIONS.PLAYER.STOP;
    }
  }

  // touches
  //   .filter((t) => ['start', 'end'].includes(t.type))
  //   .map((t) => {
  //     const touchedX: number = t.event.pageX;
  //     const touchedY: number = t.event.pageY;

  //     if (t.type === 'start') {
  //       //detect touched left;
  //       if (touchedX < MAX_WIDTH / 2) {
  //         if (position.x > 1) {
  //           Matter.Body.translate(player.body, {
  //             x: -playerMovementSpeed,
  //             y: 0.0,
  //           });
  //         }
  //       }
  //       //detect touch right;
  //       if (touchedX > MAX_WIDTH / 2) {
  //         if (position.x < MAX_WIDTH - PLAYER_SIZE) {
  //           Matter.Body.translate(player.body, {
  //             x: +playerMovementSpeed,
  //             y: 0.0,
  //           });
  //         }
  //       }
  //     }

  //     if (t.type === 'end') {
  //       if (player && player.body.position) {
  //         Matter.Body.translate(player.body, {
  //           x: t.delta.pageX,
  //           y: t.delta.pageY,
  //         });
  //       }
  //     }
  //   });

  return entities;
};

export default MovePlayer;
