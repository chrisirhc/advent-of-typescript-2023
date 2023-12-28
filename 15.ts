type NArray<T, N extends number, A extends T[] = []> =
	A['length'] extends N
		? A
		: NArray<T, N, [...A, T]>;

type BoxToys<T, N> = 
	// Distributive union trick https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
	N extends number ? NArray<T, N> : never;