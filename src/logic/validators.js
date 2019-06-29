import { extractStart, extractSize } from "./converters";

export const startMatcher = /^\d{1,3} \d{1,3} [NESW]$/;
const instructionsMatcher = /^[LRM]{1,1000}$/;
const sizeMatcher = /^\d{1,3} \d{1,3}$/;

export const isValid = (startString, instructionsString, sizeString) => {
  return (
    isValidStart(startString) &&
    isValidInstructions(instructionsString) &&
    isValidSize(sizeString)
  );
};

export const isValidStart = startString =>
  startString.match(startMatcher) != null;

export const isValidInstructions = instructionsString =>
  instructionsString.match(instructionsMatcher) != null;

export const isValidSize = sizeString => sizeString.match(sizeMatcher) != null;

export const isValidStartAndSize = (startString, sizeString) => {
  if (!isValidStart(startString) || !isValidSize(sizeString)) {
    return false;
  }

  const start = extractStart(startString);
  const size = extractSize(sizeString);

  return start.pos.x <= size.x && start.pos.y <= size.y;
};
