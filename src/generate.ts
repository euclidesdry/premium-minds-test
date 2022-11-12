import { sysMessage } from "./constants";
import { setSecondDimension } from "./utils";

/**
 * Generates the Pokemon 2D world for Ash movement
 * @param mapRange range number to generate the 2d map, this will be the size of each second dimension in
 * @returns 2D world pokemon as array of numbers bidimensional
 */
export function generate2DWorld(mapRange = 5) {
	const pokemon2DWorld: number[][] = [[]];

	if (mapRange < 5) throw new Error(sysMessage.ERROR_UNDER_THAN_5);

	// Setting the first dimension
	for (let i = 0; i < mapRange; i++) {
		// setting second dimension
		for (let j = 0; j < mapRange; j++) {
			pokemon2DWorld[i] = setSecondDimension(pokemon2DWorld, i, j);
			pokemon2DWorld[i][j] = j + 1;
		}
	}

	return pokemon2DWorld;
}
