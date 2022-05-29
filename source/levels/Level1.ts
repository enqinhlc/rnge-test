import { TILE_SIZE, TAGS, PLAYER_SIZE } from '@source/Constants';
import TileGroundMap from '@entities/TileGroundMap';
import Player from '@entities/Player';

export const TileMap = [
  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 1
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 2
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 3
  [2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 4
  [2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 5
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 6
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 7
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 8
];

export const Entities = {
  map: {
    body: {
      label: 'Jungle Map',
      position: { x: 0, y: 0 },
      size: {
        width: TILE_SIZE * TileMap[0].length,
        height: TILE_SIZE * TileMap.length,
      },
      bounds: { x: 0, y: 0 },
    },
    tags: [TAGS.GROUND],
    TileMap,
    renderer: TileGroundMap,
  },
  player: {
    body: {
      label: 'Jungle Map Player',
      position: {
        x: TILE_SIZE * 3,
        y: TILE_SIZE * 3,
      },
      size: {
        width: PLAYER_SIZE,
        height: PLAYER_SIZE,
      },
      bounds: { x: 0, y: 0 },
    },
    tags: [TAGS.GROUND],
    renderer: Player,
  },
};
