import { Coordinates } from "./coordinates";
import { Grid } from "./grid";

export class MarsRover {
  private coordinate: Coordinates;
  private direction: string;
  private grid: Grid;

  constructor(
    coordinates: Coordinates = new Coordinates(0, 0),
    direction: string = "N"
  ) {
    this.coordinate = coordinates;
    this.direction = direction;
    this.grid = new Grid();
  }

  public command(givenCommand: string): void {
    givenCommand.split("").forEach((command) => {
      if (command === "R") {
        this.direction = this.grid.turnRight(this.direction);
      } else if (command === "L") {
        this.direction = this.grid.turnLeft(this.direction);
      } else if (command === "M") {
        this.coordinate = this.grid.move(this.coordinate, this.direction);
      }
    });
  }

  public currentPosition(): string {
    return `${this.coordinate.getXCoordinate()}:${this.coordinate.getYCoordinate()}:${
      this.direction
    }`;
  }
}
