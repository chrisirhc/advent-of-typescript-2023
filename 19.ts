type GetLast<A extends any[]> =
	A extends [...any[], infer L]
		? L
		: never;

type Modulo4<N extends number, A extends number[] = [], M extends number[] = []> =
	N extends 0
		? 0
		: A['length'] extends N
			?  M['length'] extends 4
				? 0
				: M['length']
			: Modulo4<
					N,
					[ ...A, 0 ],
					M['length'] extends 3
						? []
						: [...M, 0]
				>

// From 15
type NArray<T, N extends number, A extends T[] = []> =
	A['length'] extends N
		? A
		: NArray<T, N, [...A, T]>;

type Item = ['🛹','🚲','🛴','🏄'];

type Rebuild<T extends number[]> =
	T extends []
		?  []
		: T extends [...infer TF extends number[], infer TB extends number]
			? [
					...Rebuild<TF>,
					...NArray< Item[Modulo4<TF['length']>], TB>
				]
			: NArray< Item[Modulo4<0>], T[0]>;
