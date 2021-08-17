import { MarsRover } from "../main/marsrover";
import { Coordinates } from "../main/coordinates";

describe("Mars Rover movement", () => {
  describe("when Rover is given a command R", () => {
    it.each([
      ["N", "0:0:E"],
      ["E", "0:0:S"],
      ["S", "0:0:W"],
      ["W", "0:0:N"],
    ])(
      "and rover is facing %s, it should return position %s",
      (givenDirection: string, expectedPosition: string) => {
        const rover = new MarsRover(new Coordinates(0, 0), givenDirection);
        rover.command("R");
        expect(rover.currentPosition()).toBe(expectedPosition);
      }
    );
  });

  describe("when Rover is given a command L", () => {
    it.each([
      ["N", "0:0:W"],
      ["W", "0:0:S"],
      ["S", "0:0:E"],
      ["E", "0:0:N"],
    ])(
      "and rover is facing %s, it should return position %s",
      (givenDirection: string, expectedPosition: string) => {
        const rover = new MarsRover(new Coordinates(0, 0), givenDirection);
        rover.command("L");
        expect(rover.currentPosition()).toBe(expectedPosition);
      }
    );
  });

  describe("when Rover is given multiple direction change command", () => {
    it.each([
      ["RR", "0:0:S"],
      ["RRR", "0:0:W"],
      ["RL", "0:0:N"],
      ["RLL", "0:0:W"],
    ])(
      "and when rover is facing N given the command %s, it should return position %s",
      (givenCommand: string, expectedPosition: string) => {
        const rover = new MarsRover(new Coordinates(0, 0), "N");
        rover.command(givenCommand);
        expect(rover.currentPosition()).toBe(expectedPosition);
      }
    );
  });

  describe("when Rover moves forward", () => {
    it.each([
      ["N", "1:2:N"],
      ["W", "0:1:W"],
      ["S", "1:0:S"],
      ["E", "2:1:E"],
    ])(
      "Given the stating position 1,1 and command M if the rover is facing %s its new position is %s",
      (givenDirection: string, expectedPosition: string) => {
        const rover = new MarsRover(new Coordinates(1, 1), givenDirection);
        rover.command("M");
        expect(rover.currentPosition()).toBe(expectedPosition);
      }
    );
  });

  describe("Given a random set of commands the rover should perform those movements", () => {
    it.each([
      ["MMRMMLM", "2:3:N"],
      ["MMMMMMMMMM", "0:0:N"],
    ])(
      "Given the stating position 0,0,N and command %s the new position is %s",
      (givenCommand: string, expectedPosition: string) => {
        const rover = new MarsRover(new Coordinates(0, 0), "N");
        rover.command(givenCommand);
        expect(rover.currentPosition()).toBe(expectedPosition);
      }
    );
  });
});
