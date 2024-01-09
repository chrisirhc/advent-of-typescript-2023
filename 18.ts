type Count<T extends any[], E, S extends E[] = []> = 
T extends [...infer TF, Exclude<T[number],E>] 
? Count<TF, E, S> 
: T extends [...infer TF, E] 
  ? Count<TF, E, [...S, E]>
	: T extends []
	  ? S['length']
		: never;