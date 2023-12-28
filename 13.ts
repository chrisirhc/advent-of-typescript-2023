// There's likely a better way but I haven't thought of it...
type AddOne<S extends number, B extends number[] = []> = 
	B extends [...any[], S] ? B['length'] : AddOne<S, [...B, B['length']]>;

type DayCounter<S extends number, E extends number> = 
	S extends E ? S : (S | DayCounter<AddOne<S>, E>);