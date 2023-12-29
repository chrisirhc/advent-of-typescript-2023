type Count<T extends any[], E> = 
	T extends [...infer TF, Exclude<T[number], E>] 
		? Count<TF, E> 
		: T['length'];
