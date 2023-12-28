type FindSantaCol<T extends ('🎅🏼'|'🎄')[]> = 
  T extends [...infer F extends ('🎅🏼'|'🎄')[], '🎄']
    ? FindSantaCol<F>
    // Once all the trees are extracted, check if right-most is santa
    : T extends [...infer F extends ('🎄')[], '🎅🏼']
      ? F['length']
      : never;

type FindSanta<T> =
	// Extract out all the trees from the right.
	T extends [...infer F extends ('🎅🏼'|'🎄')[][], '🎄'[]]
		? FindSanta<F>
		// Once all the trees are extracted, check if right-most is Santa
		: T extends [...infer F extends ('🎄')[][], infer B extends ('🎅🏼'|'🎄')[]]
			? [F['length'], FindSantaCol<B>]
			: never;