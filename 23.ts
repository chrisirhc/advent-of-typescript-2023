// WIP still yet to add the each move logic
type Connect4Chips = '🔴' | '🟡';
type Connect4Cell = Connect4Chips | '  ';
type Connect4State = '🔴' | '🟡' | '🔴 Won' | '🟡 Won' | 'Draw';

type EmptyBoard = [
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
  ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
];

type NewGame = {
  board: EmptyBoard;
  state: "🟡";
};

type Board = Connect4Cell[][];
type GameState = {
  board: Board;
  state: Connect4State;
};

type Connect4<B extends GameState, N extends 0 | 1 | 2 | 3 | 4 | 5 | 6> = unknown;

type x = [1,1,1,any] extends [1,1,1,2] ? true : false;
//   ^?
type y = [1,1,1,2] extends ([1,1,1,any] | [any, 1,1,1, any]) ? true : false;
//   ^?

// Longest line including diagonals is 7.
type Connected4Sets<T extends Connect4Chips> =
  | [T, T, T, T]
  | [T, T, T, T, any]
  | [T, T, T, T, any, any]
  | [T, T, T, T, any, any, any]
  | [T, T, T, T, any, any, any, any]
  | [any, T, T, T, T]
  | [any, T, T, T, T, any]
  | [any, T, T, T, T, any, any]
  | [any, T, T, T, T, any, any, any]
  | [any, any, T, T, T, T]
  | [any, any, T, T, T, T, any]
  | [any, any, T, T, T, T, any, any]
  | [any, any, any, T, T, T, T]
  | [any, any, any, T, T, T, T, any]
  | [any, any, any, any, T, T, T, T]

type HasWon<B extends Board, C extends Connect4Chips> =
  | (
    // Rows
    | B[number]

    // Columns
    | [B[0][0], B[1][0], B[2][0], B[3][0], B[4][0], B[5][0]]
    | [B[0][1], B[1][1], B[2][1], B[3][1], B[4][1], B[5][1]]
    | [B[0][2], B[1][2], B[2][2], B[3][2], B[4][2], B[5][2]]
    | [B[0][3], B[1][3], B[2][3], B[3][3], B[4][3], B[5][3]]
    | [B[0][4], B[1][4], B[2][4], B[3][4], B[4][4], B[5][4]]
    | [B[0][5], B[1][5], B[2][5], B[3][5], B[4][5], B[5][5]]
    | [B[0][6], B[1][6], B[2][6], B[3][6], B[4][6], B[5][6]]

    // Diagonals
    | [B[0][0], B[1][1], B[2][2], B[3][3], B[4][4], B[5][5]]
    | [B[1][0], B[2][1], B[3][2], B[4][3], B[5][4]]
    | [B[2][0], B[3][1], B[4][2], B[5][3]]
    | [B[3][0], B[4][1], B[5][2], B[6][3]]

    | [B[0][1], B[1][2], B[2][3], B[3][4], B[4][5], B[5][6]]
    | [B[0][2], B[1][3], B[2][4], B[3][5], B[4][6]]
    | [B[0][3], B[1][4], B[2][5], B[3][6]]

    | [B[0][6], B[1][5], B[2][4], B[3][3], B[4][2], B[5][1]]
    | [B[1][6], B[2][5], B[3][4], B[4][3], B[5][2]]
    | [B[2][6], B[3][5], B[4][4], B[5][3]]

    | [B[0][5], B[1][4], B[2][3], B[3][2], B[4][1], B[5][0]]
    | [B[0][4], B[1][3], B[2][2], B[3][1], B[4][0]]
    | [B[0][3], B[1][2], B[2][1], B[3][0]]

  ) & Connected4Sets<C>;

type t1 = HasWon<[
      ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
      ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴'],
      ['🟡', '🔴', '🔴', '🟡', '🟡', '🔴', '🟡'],
      ['🔴', '🟡', '🟡', '🟡', '🔴', '🟡', '🔴'],
      ['🟡', '🔴', '🔴', '🟡', '🔴', '🟡', '🟡'],
      ['🔴', '🟡', '🟡', '🔴', '🔴', '🟡', '🔴']
    ], '🟡'>
//   ^?
