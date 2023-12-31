type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  '
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTactToeBoard;
  state: TicTacToeState;
};

type EmptyBoard = [
  ['  ', '  ', '  '], 
  ['  ', '  ', '  '], 
  ['  ', '  ', '  ']
];

type NewGame = {
  board: EmptyBoard;
  state: '❌';
};

type TicTacToe<T extends TicTacToeGame, P extends TicTacToePositions> = 
  InvalidMove<T, P> extends false
    ? {
        board: NewBoardState<T, P>,
        state: T['state'] extends TicTacToeChip
          ? WhoWon<T['state'], NewBoardState<T, P>>
          : never
      }
    : T;

type Position = {
  top: 0,
  middle: 1,
  bottom: 2,
  left: 0,
  center: 1,
  right: 2,
};

type InvalidMove<T extends TicTacToeGame, P extends TicTacToePositions> =
  P extends `${infer Y extends TicTacToeYPositions}-${infer X extends TicTacToeXPositions}`
    ? T["board"][Position[Y]][Position[X]] extends TicTacToeEmptyCell
      ? false
      : true
    : never;

type NewBoardState<T extends TicTacToeGame, P extends TicTacToePositions> =
  T['state'] extends TicTacToeChip
  ? [
    [
      P extends 'top-left' ? T["state"] : T["board"][0][0],
      P extends 'top-center' ? T["state"] : T["board"][0][1], 
      P extends 'top-right' ? T["state"] : T["board"][0][2], 
    ],

    [
      P extends 'middle-left' ? T["state"] : T["board"][1][0],
      P extends 'middle-center' ? T["state"] : T["board"][1][1], 
      P extends 'middle-right' ? T["state"] : T["board"][1][2], 
    ],

    [
      P extends 'bottom-left' ? T["state"] : T["board"][2][0],
      P extends 'bottom-center' ? T["state"] : T["board"][2][1], 
      P extends 'bottom-right' ? T["state"] : T["board"][2][2], 
    ]
  ]
  : never;

type WhoWon<S extends TicTacToeChip, B extends TicTactToeBoard> =
  B extends 
    | [string, S, string][] | [S, string, string][] | [string, string, S][]
    | [S[], any[], any[]] | [any[], S[], any[]] | [any[], any[], S[]]
    ? `${S} Won`
    : B extends (TicTacToeChip)[][]
      ? 'Draw'
      : S extends '❌'
        ? '⭕'
        : '❌';
