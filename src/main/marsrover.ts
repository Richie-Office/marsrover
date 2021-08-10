import { turnRight, turnLeft } from "./directions";

export class MarsRover {
  private xPosition: number;
  private yPosition: number;
  private direction: string;
  private xBoundary: number;
  private yBoundary: number;

  constructor(
    xPosition: number = 0,
    yPosition: number = 0,
    direction: string = "N"
  ) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.direction = direction;
    this.xBoundary = 9;
    this.yBoundary = 9;
  }

  private movement() {
    if (this.direction === "N") {
      this.yPosition =
        this.yPosition + 1 > this.yBoundary ? 0 : (this.yPosition += 1);
    } else if (this.direction === "E") {
      this.xPosition + 1 > this.xBoundary ? 0 : (this.xPosition += 1);
    } else if (this.direction === "S") {
      this.yPosition =
        this.yPosition - 1 < 0 ? this.yBoundary : (this.yPosition -= 1);
    } else if (this.direction === "W") {
      this.xPosition =
        this.xPosition - 1 < 0 ? this.xBoundary : (this.xPosition -= 1);
    }

    if (this.xPosition > this.xBoundary) {
      this.xPosition = 0;
    }
  }

  public command(givenCommand: string): void {
    givenCommand.split("").forEach((command) => {
      if (command === "R") {
        this.direction = turnRight(this.direction);
      } else if (command === "L") {
        this.direction = turnLeft(this.direction);
      } else if (command === "M") {
        this.movement();
      }
    });
  }

  public currentPosition(): string {
    return `${this.xPosition}:${this.yPosition}:${this.direction}`;
  }
}
