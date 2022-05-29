import { PLAYER_START_X, PLAYER_START_Y } from '@source/Constants';

class Camera {
  offsetX: number = 0;
  offsetY: number = 0;
  constructor() {
    this.offsetX = 0;
    this.offsetY = 0;
  }

  updateOffset(x: number, y: number) {
    this.offsetX += x;
    this.offsetY += y;
  }

  getOffset() {
    return { x: this.offsetX, y: this.offsetY };
  }
}

export default new Camera();
