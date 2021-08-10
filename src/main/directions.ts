const directions = ["N", "E", "S", "W"];

const turnRight = (direction: string): string => {
  const indexOfDirection = directions.indexOf(direction);

  if (indexOfDirection + 1 === directions.length) {
    return directions[0];
  }
  return directions[indexOfDirection + 1];
};

const turnLeft = (direction: string): string => {
  const indexOfDirection = directions.indexOf(direction);

  if (indexOfDirection - 1 < 0) {
    return directions[directions.length - 1];
  }
  return directions[indexOfDirection - 1];
};

export { turnRight, turnLeft };
