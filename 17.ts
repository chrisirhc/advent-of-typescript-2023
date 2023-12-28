type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type Flip<T> =
	T extends 'win'
	? 'lose'
	: T extends 'lose'
		? 'win'
		: T;

type WhoWins<A, B> =
	B extends A
		? 'draw'
		: B extends '👊🏻'
			? A extends '✌🏽'
				? 'win'
				: Flip<WhoWins<B, A>>
			: B extends '✌🏽'
				? A extends '🖐🏾'
					? 'win'
					: Flip<WhoWins<B, A>>
				: B extends '🖐🏾'
					? A extends '👊🏻'
						? 'win'
						: Flip<WhoWins<B, A>>
					: 'draw';