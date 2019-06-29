import { isValid, isValidStartAndSize, isValidStart } from "./validators";
import {
  extractStart,
  extractInstructions,
  extractSize,
  positionToString
} from "./converters";

const calculateNewPosition = (startString, instructionsString, sizeString) => {
  if (!isValid(startString, instructionsString, sizeString)) {
    if (isValidStart(startString)) {
      return startString;
    } else {
      return "";
    }
  }

  if (!isValidStartAndSize(startString, sizeString)) {
    console.log(startString, sizeString);

    return "";
  }

  const position = calculatePosition(
    extractStart(startString),
    extractInstructions(instructionsString),
    extractSize(sizeString)
  );
  return positionToString(position);
};

export const calculatePosition = (start, instructions, size) => {
  return instructions.reduce((position, instruction) => {
    if (["L", "R"].includes(instruction)) {
      return { ...position, dir: newDir(position.dir, instruction) };
    } else if ("M" === instruction) {
      return { ...position, pos: newPos(position, size) };
    } else {
      return position; // error
    }
  }, start);
};

export const newDir = (dir, instruction) => {
  if (["L", "R"].includes(instruction)) {
    const dirs = ["N", "E", "S", "W"];
    return dirs[(dirs.indexOf(dir) + (instruction === "R" ? 1 : 3)) % 4];
  }
};

export const newPos = (position, size) => {
  const { pos, dir } = position;
  switch (dir) {
    case "N":
      return {
        x: pos.x,
        y: Math.min(pos.y + 1, size.y)
      };
    case "E":
      return {
        x: Math.min(pos.x + 1, size.x),
        y: pos.y
      };
    case "S":
      return {
        x: pos.x,
        y: Math.max(0, pos.y - 1)
      };
    case "W":
      return {
        x: Math.max(0, pos.x - 1),
        y: pos.y
      };
    default: // error
  }
};

export default calculateNewPosition;
