type Count<TElements extends any[], EToCount, TAcc extends EToCount[] = []> = 
	TElements extends [...infer TFront, Exclude<TElements[number], EToCount>] 
		? Count<TFront, EToCount, TAcc> 
		: TElements extends [...infer TFront, EToCount] 
			? Count<TFront, EToCount, [...TAcc, EToCount]>
			: TElements extends []
				? TAcc['length']
				: never;