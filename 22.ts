/** because "dashing" implies speed */
type Dasher = '💨';

/** representing dancing or grace */
type Dancer = '💃';

/** a deer, prancing */
type Prancer = '🦌';

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = '🌟';

/** for the celestial body that shares its name */
type Comet = '☄️';

/** symbolizing love, as Cupid is the god of love */
type Cupid = '❤️';

/** representing thunder, as "Donner" means thunder in German */
type Donner = '🌩️';

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = '⚡';

/** for his famous red nose */
type Rudolph = '🔴';

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph;

type Validate<T extends Reindeer[][][]> = 
	Reindeer extends AllSet<T>
		? true
		: false;

type AllSet<T extends Reindeer[][][]> =
	& T[0][number][number]
	& T[1][number][number]
	& T[2][number][number]
	& T[0 | 1 | 2][0][number]
	& T[0 | 1 | 2][1][number]
	& T[0 | 1 | 2][2][number]
	& T[3 | 4 | 5][0][number]
	& T[3 | 4 | 5][1][number]
	& T[3 | 4 | 5][2][number]
	& T[6 | 7 | 8][0][number]
	& T[6 | 7 | 8][1][number]
	& T[6 | 7 | 8][2][number];

// to access row, it's T[N][number][number]
// to access column, it's T[number][M 0,2][N 0,2]
// to access mini squares, I don't think it's necessary. but it'd be:
// T[J 0,2;3,5;6,8][K 0,2][number]