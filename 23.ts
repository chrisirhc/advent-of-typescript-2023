type Connect4Chips = '🔴' | '🟡';
type Connect4Cell = Connect4Chips | '  ';
type Connect4CellEmpty = '  ';
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

type Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type ColumnsTuple = [0, 1, 2, 3, 4, 5, 6];
type Rows = 0 | 1 | 2 | 3 | 4 | 5;
type RowsTuple = [0, 1, 2, 3, 4, 5];
type RowsP1Tuple = [1, 2, 3, 4, 5];


type NextBoard<B extends GameState, N extends Columns> =
  [
    [NSC<B, N, 0, 0>, NSC<B, N, 0, 1>, NSC<B, N, 0, 2>, NSC<B, N, 0, 3>, NSC<B, N, 0, 4>, NSC<B, N, 0, 5>, NSC<B, N, 0, 6>],
    [NSC<B, N, 1, 0>, NSC<B, N, 1, 1>, NSC<B, N, 1, 2>, NSC<B, N, 1, 3>, NSC<B, N, 1, 4>, NSC<B, N, 1, 5>, NSC<B, N, 1, 6>],
    [NSC<B, N, 2, 0>, NSC<B, N, 2, 1>, NSC<B, N, 2, 2>, NSC<B, N, 2, 3>, NSC<B, N, 2, 4>, NSC<B, N, 2, 5>, NSC<B, N, 2, 6>],
    [NSC<B, N, 3, 0>, NSC<B, N, 3, 1>, NSC<B, N, 3, 2>, NSC<B, N, 3, 3>, NSC<B, N, 3, 4>, NSC<B, N, 3, 5>, NSC<B, N, 3, 6>],
    [NSC<B, N, 4, 0>, NSC<B, N, 4, 1>, NSC<B, N, 4, 2>, NSC<B, N, 4, 3>, NSC<B, N, 4, 4>, NSC<B, N, 4, 5>, NSC<B, N, 4, 6>],
    [NSC<B, N, 5, 0>, NSC<B, N, 5, 1>, NSC<B, N, 5, 2>, NSC<B, N, 5, 3>, NSC<B, N, 5, 4>, NSC<B, N, 5, 5>, NSC<B, N, 5, 6>]
  ];

// NextStateCell
type NSC<B extends GameState, N extends Columns, R extends Rows, C extends Columns> =
  N extends C
    ? B['state'] extends infer S extends Connect4Chips
      ? B['board'][R][C] extends Connect4CellEmpty
        ? RowsP1Tuple[R] extends Rows
          ? B['board'][RowsP1Tuple[R]][C] extends Connect4Chips 
            ? S
            : B['board'][R][C]
          : S
        : B['board'][R][C]
      : B['board'][R][C]
    : B['board'][R][C];

type NextState<B extends GameState, N extends Columns> =
  B['state'] extends Connect4Chips
    ? NextBoard<B, N> extends infer NB extends Board
      ? HasWon<NB, B['state']> extends false
        ? B['board'][number][number] extends Connect4Chips
          ? 'Draw'
          : B['state'] extends '🔴'
            ? '🟡'
            : '🔴'
        : `${B['state']} Won`
      : B['state']
    : never;

type Connect4<B extends GameState, N extends Columns> = {
  board: NextBoard<B, N>,
  state: NextState<B, N>,
};

type x = [1,1,1,any] extends [1,1,1,2] ? true : false;
//   ^?
type y = [1,1,1,2] extends ([1,1,1,any] | [any, 1,1,1, any]) ? true : false;
//   ^?

type test_move1_actual1 = NextBoard<{
  board: [
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["  ", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🔴", "  ", "  ", "  ", "  ", "  ", "  "],
    ["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
  ];
  state: "🔴";
}, 0>;

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

// From type-testing
type IsNever<T> = [T] extends [never] ? true : false;
type IsTuple<T> = IsNever<T> extends true ? false : T extends readonly unknown[] ? number extends T["length"] ? false : true : false;

type HasWon<B extends Board, C extends Connect4Chips> = IsTuple<(
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

  ) & Connected4Sets<C>)> extends true ? false : true;
