import { setSecondDimension } from "./utils";

export function generate2DWorld(mapRange = 4) {
	const pokemon2DWorld: number[][] = [[]];

	// Setting the first dimension
	for (let i = 0; i < mapRange; i++) {
		// setting second dimension
		for (let j = 0; j < mapRange; j++) {
			pokemon2DWorld[i] = setSecondDimension(pokemon2DWorld, i, j);
			pokemon2DWorld[i][j] = j;
		}
	}

	return pokemon2DWorld;
}
