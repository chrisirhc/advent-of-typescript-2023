// WIP
type Alley = "  ";
type MazeItem = "🎄" | "🎅" | Alley;
type DELICIOUS_COOKIES = "🍪";
type MazeMatrix = MazeItem[][];
type Directions = "up" | "down" | "left" | "right";
type Move<M extends MazeMatrix, D extends Directions> =
  NextMaze<M, D>;

type Coord = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type NoMove = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
type MoveP1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, undefined];
type MoveM1 = [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type CoordMovePrevRow = {
	up: MoveP1, // Previous Row is Row+1
	down: MoveM1, // Previous row is Row-1
	left: NoMove,
	right: NoMove,
};
type CoordMovePrevCol = {
	left: MoveP1, // Previous Column when moving left is Col+1
	right: MoveM1, // Previous Column when moving right is Col-1
	up: NoMove,
	down: NoMove,
};
type CoordMoveNextRow = {
	up: MoveM1,
	down: MoveP1
	left: NoMove,
	right: NoMove,
};
type CoordMoveNextCol = {
	left: MoveM1, // Next Column when moving left is Col-1
	right: MoveP1, // Next Column when moving right is Col+1
	up: NoMove,
	down: NoMove,
};

type NM<M extends MazeMatrix, D extends Directions, R extends Coord, C extends Coord> =
	[CoordMovePrevRow[D][R], CoordMovePrevCol[D][C]] extends [infer PrevRow extends Coord, infer PrevCol extends Coord]
    ? [M[PrevRow][PrevCol], M[R][C]] extends ["🎅", Alley]
      ? "🎅"
      : [CoordMoveNextRow[D][R], CoordMoveNextCol[D][C]] extends [infer NextRow extends Coord, infer NextCol extends Coord]
      ? [M[R][C], M[NextRow][NextCol]] extends ["🎅", Alley]
        ? Alley
        : M[R][C]
      : M[R][C]
		: M[R][C];

type NextMaze<M extends MazeMatrix, D extends Directions> = [
	[NM<M, D, 0, 0>, NM<M, D, 0, 1>, NM<M, D, 0, 2>, NM<M, D, 0, 3>, NM<M, D, 0, 4>, NM<M, D, 0, 5>, NM<M, D, 0, 6>, NM<M, D, 0, 7>, NM<M, D, 0, 8>, NM<M, D, 0, 9>],
	[NM<M, D, 1, 0>, NM<M, D, 1, 1>, NM<M, D, 1, 2>, NM<M, D, 1, 3>, NM<M, D, 1, 4>, NM<M, D, 1, 5>, NM<M, D, 1, 6>, NM<M, D, 1, 7>, NM<M, D, 1, 8>, NM<M, D, 1, 9>],
	[NM<M, D, 2, 0>, NM<M, D, 2, 1>, NM<M, D, 2, 2>, NM<M, D, 2, 3>, NM<M, D, 2, 4>, NM<M, D, 2, 5>, NM<M, D, 2, 6>, NM<M, D, 2, 7>, NM<M, D, 2, 8>, NM<M, D, 2, 9>],
	[NM<M, D, 3, 0>, NM<M, D, 3, 1>, NM<M, D, 3, 2>, NM<M, D, 3, 3>, NM<M, D, 3, 4>, NM<M, D, 3, 5>, NM<M, D, 3, 6>, NM<M, D, 3, 7>, NM<M, D, 3, 8>, NM<M, D, 3, 9>],
	[NM<M, D, 4, 0>, NM<M, D, 4, 1>, NM<M, D, 4, 2>, NM<M, D, 4, 3>, NM<M, D, 4, 4>, NM<M, D, 4, 5>, NM<M, D, 4, 6>, NM<M, D, 4, 7>, NM<M, D, 4, 8>, NM<M, D, 4, 9>],
	[NM<M, D, 5, 0>, NM<M, D, 5, 1>, NM<M, D, 5, 2>, NM<M, D, 5, 3>, NM<M, D, 5, 4>, NM<M, D, 5, 5>, NM<M, D, 5, 6>, NM<M, D, 5, 7>, NM<M, D, 5, 8>, NM<M, D, 5, 9>],
	[NM<M, D, 6, 0>, NM<M, D, 6, 1>, NM<M, D, 6, 2>, NM<M, D, 6, 3>, NM<M, D, 6, 4>, NM<M, D, 6, 5>, NM<M, D, 6, 6>, NM<M, D, 6, 7>, NM<M, D, 6, 8>, NM<M, D, 6, 9>],
	[NM<M, D, 7, 0>, NM<M, D, 7, 1>, NM<M, D, 7, 2>, NM<M, D, 7, 3>, NM<M, D, 7, 4>, NM<M, D, 7, 5>, NM<M, D, 7, 6>, NM<M, D, 7, 7>, NM<M, D, 7, 8>, NM<M, D, 7, 9>],
	[NM<M, D, 8, 0>, NM<M, D, 8, 1>, NM<M, D, 8, 2>, NM<M, D, 8, 3>, NM<M, D, 8, 4>, NM<M, D, 8, 5>, NM<M, D, 8, 6>, NM<M, D, 8, 7>, NM<M, D, 8, 8>, NM<M, D, 8, 9>],
	[NM<M, D, 9, 0>, NM<M, D, 9, 1>, NM<M, D, 9, 2>, NM<M, D, 9, 3>, NM<M, D, 9, 4>, NM<M, D, 9, 5>, NM<M, D, 9, 6>, NM<M, D, 9, 7>, NM<M, D, 9, 8>, NM<M, D, 9, 9>],
]

import { Expect, Equal } from "type-testing";

type Maze0 = [
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎅", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "  ", "  ", "  ", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
  ["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
  ["  ", "  ", "🎄", "🎄", "  ", "  ", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
];
type test_maze0_down_actual = Move<Maze0, 'down'>;
// For each coord, calculate the next value. Move the Santa if the previous direction grid value contains the santa.
// If Santa gets out, Santa is not an item in the final maze. Flip all blanks to DELICIOUS_COOKIEtype test_maze0_down_actual = Move<Maze0, 'down'>;
//   ^?
type Maze1 = [
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "🎅", "  ", "  ", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
  ["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
  ["  ", "  ", "🎄", "🎄", "  ", "  ", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
  ["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
];
type test_maze0_down = Expect<Equal<test_maze0_down_actual, Maze1>>;
type x = test_maze0_down_actual[1];
