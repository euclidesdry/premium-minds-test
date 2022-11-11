/**
 * Returns the calculated bidimensional array for each first dimension
 * @param mainDimension array of numbers bidimensional
 * @param firstDimension index of first dimension
 * @param secondDimension index of second dimension
 * @returns array of numbers bidimensional
 */
export function setSecondDimension(
	mainDimension: number[][],
	firstDimension: number,
	secondDimension: number
) {
	if (
		mainDimension[firstDimension] &&
		mainDimension[firstDimension].length > 0
	) {
		return [...mainDimension[firstDimension], secondDimension];
	}
	return [secondDimension];
}

/**
 * A simple user output function
 */
export function userOutput(
	pokemon2DWorld: number[][],
	directionsToWalk: string,
	caughtPokemons: number
) {
	console.log("Your Directions 🚶‍♂️: ", directionsToWalk, caughtPokemons);
	console.log("World: ");
	for (let k = 0; k < pokemon2DWorld.length; k++) {
		console.log(pokemon2DWorld[k]);
	}

	// for (let k = 0; k < pokemon2DWorld.length; k++) {
	// 	console.log(pokemon2DWorld[k]);
	// }

	console.log("Number of Caught Pokemons: ", caughtPokemons);
}
