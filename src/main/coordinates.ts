export class Coordinates {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getXCoordinate() {
    return this.x;
  }

  public getYCoordinate() {
    return this.y;
  }
}
