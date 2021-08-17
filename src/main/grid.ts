import { Coordinates } from "./coordinates";

const xBoundary: number = 10;
const yBoundary: number = 10;

const directions = ["N", "E", "S", "W"];

export class Grid {
  public move(coordinate: Coordinates, direction: string) {
    let xPosition = coordinate.getXCoordinate();
    let yPosition = coordinate.getYCoordinate();
    if (direction === "N") {
      yPosition = yPosition + 1 === yBoundary ? 0 : (yPosition += 1);
    } else if (direction === "E") {
      xPosition = xPosition + 1 === xBoundary ? 0 : (xPosition += 1);
    } else if (direction === "S") {
      yPosition = yPosition - 1 < 0 ? yBoundary : (yPosition -= 1);
    } else if (direction === "W") {
      xPosition = xPosition - 1 < 0 ? xBoundary : (xPosition -= 1);
    }

    return new Coordinates(xPosition, yPosition);
  }

  public turnRight(direction: string): string {
    const indexOfDirection = directions.indexOf(direction);

    return indexOfDirection + 1 === directions.length
      ? directions[0]
      : directions[indexOfDirection + 1];
  }

  public turnLeft(direction: string): string {
    const indexOfDirection = directions.indexOf(direction);

    return indexOfDirection - 1 < 0
      ? directions[directions.length - 1]
      : directions[indexOfDirection - 1];
  }
}
