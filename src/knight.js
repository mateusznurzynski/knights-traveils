const KnightMove = (up = 0, right = 0, down = 0, left = 0) => {
  const verticalDifference = up - down;
  const horizontalDifference = right - left;

  return {
    verticalDifference,
    horizontalDifference,
  };
};

const possibleKnightMoves = [
  KnightMove(2, 0, 0, 1),
  KnightMove(2, 1, 0, 0),
  KnightMove(1, 2, 0, 0),
  KnightMove(0, 2, 1, 0),
  KnightMove(0, 1, 2, 0),
  KnightMove(0, 0, 2, 1),
  KnightMove(0, 0, 1, 2),
  KnightMove(1, 0, 0, 2),
];

const Knight = (initialPosition) => ({
  position: initialPosition,
  movesCounter: 0,
});

export { Knight, possibleKnightMoves };
