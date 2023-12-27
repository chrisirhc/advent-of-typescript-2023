type FindSanta<T extends ('🎅🏼'|'🎄')[]> = 
	T extends ['🎅🏼', ...'🎄'[]] ? 0 : 
	  // Extract out all the trees from the right.
		T extends [...infer F extends ('🎅🏼'|'🎄')[], '🎄'] ? FindSanta<F> : 
		  // Once all the trees are extracted, check if right-most is santa
			T extends [...infer F extends ('🎄')[], '🎅🏼'] ? F['length'] :
				never;