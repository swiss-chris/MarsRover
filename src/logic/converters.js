export const extractStart = startString => {
  const [x, y, dir] = startString.split(" ");
  return { pos: { x: intBase10(x), y: intBase10(y) }, dir };
};

export const extractInstructions = instructionsString =>
  instructionsString.split("");

export const extractSize = sizeString => {
  const [x, y] = sizeString.split(" ");
  return { x: intBase10(x), y: intBase10(y) };
};

export const positionToString = position =>
  position.pos.x + " " + position.pos.y + " " + position.dir;

const intBase10 = int => parseInt(int, 10);
