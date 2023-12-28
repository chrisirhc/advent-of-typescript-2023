type DecipherNaughtyList<T extends string> = 
	T extends `${infer S}/${infer R}` ?
		S | DecipherNaughtyList<R>
		: T;