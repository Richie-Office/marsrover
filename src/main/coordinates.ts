export class Coordinates { // Connascence of type throughout the class
  private x: number;
  private y: number;

  constructor(x: number, y: number) { // Connascence of position || Connascence of value
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
