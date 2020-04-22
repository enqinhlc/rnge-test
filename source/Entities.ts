import {
  PLAYER_START_X,
  PLAYER_START_Y,
  ANIMATIONS,
  TAGS,
  PLAYER_SIZE,
} from './Constants';
import Player from '@entities/Player';
import GroundMap from '@entities/GroundMap';
import Entitiy from './classes/Entitiy';

Entitiy.create({
  id: 'gameStore',
  custom: {
    monsterInsertedCount: 0,
    mapBound: { x: 0, y: 0 },
  },
  tags: [],
  renderer: null,
});

Entitiy.create({
  id: 'map',
  body: {
    position: { x: 0, y: 0 },
    size: { width: 1582, height: 1198 },
    bounds: { x: 0, y: 0 },
  },
  tags: [TAGS.GROUND],
  renderer: GroundMap,
});

Entitiy.create({
  id: 'player',
  body: {
    position: { x: PLAYER_START_X, y: PLAYER_START_Y },
    size: { width: PLAYER_SIZE, height: PLAYER_SIZE },
    bounds: { x: 0, y: 0 },
  },
  tags: [TAGS.PLAYER],
  renderer: Player,
  custom: {
    animation: ANIMATIONS.PLAYER.STOP,
  },
});

export default Entitiy.getEntities();
