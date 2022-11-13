import { PositionType } from "./@types/position";
import { CONSOLE_COLORS } from "./constants";

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
): number[] {
	if (
		mainDimension[firstDimension] &&
		mainDimension[firstDimension].length > 0
	) {
		return [...mainDimension[firstDimension], secondDimension];
	}
	return [secondDimension];
}

/**
 * Get the position coordinates in the bidimensional matrix map by vertical size and horizontal size.
 * @param verticalSize vertical size of the matrix
 * @param horizontalSize horizontal size of the matrix
 * @param searchForCenterAxis enable search for the matrix center axis, by default is true
 * @returns coordinates of the 2D mapRange
 */
export function getCoordinates(
	verticalSize: number,
	horizontalSize: number,
	searchForCenterAxis = true
) {
	const verticalCenter = searchForCenterAxis
		? Math.floor(verticalSize / 2)
		: verticalSize;
	const horizontalCenter = searchForCenterAxis
		? Math.floor(horizontalSize / 2)
		: horizontalSize;

	return {
		verticalCenter,
		horizontalCenter,
		north: verticalCenter - 1, // Norte
		south: verticalCenter + 1, // Sul
		west: horizontalCenter - 1, // Oeste
		east: horizontalCenter + 1, // Este
	};
}

export function getCurrentPosition(
	currentMovement: string,
	currentPosition: PositionType,
	mapSquareSize?: number
) {
	const currentCoordinates = getCoordinates(
		currentPosition.vertical,
		currentPosition.horizontal,
		false
	);
	const position = {
		vertical: 0,
		horizontal: 0,
	} as PositionType;

	// console.log("currentPosition: ", currentPosition);

	switch (currentMovement.toUpperCase()) {
		case "N":
			position.vertical = currentCoordinates.north;
			position.horizontal = currentCoordinates.horizontalCenter;
			break;
		case "S":
			position.vertical = currentCoordinates.south;
			position.horizontal = currentCoordinates.horizontalCenter;
			break;
		case "O":
			position.vertical = currentCoordinates.verticalCenter;
			position.horizontal = currentCoordinates.west;
			break;
		case "E":
			position.vertical = currentCoordinates.verticalCenter;
			position.horizontal = currentCoordinates.east;
			break;
	}

	return {
		position,
		coordinates: currentCoordinates,
	};
}

export function calcMapExpansion(numberOfDirection: number): number {
	let count = 0;
	const generatedArrayWithValue1 = Array.from(
		Array(numberOfDirection).keys()
	).map(() => 1);
	let digits = Number(generatedArrayWithValue1.join(",").replace(/,/gi, ""));

	if (digits >= 1) ++count;

	do {
		digits /= 10; // digits = digits / 10
		++count;
	} while (digits / 10 >= 1);

	return count * 2 + 3;
}

/**
 * A simple user output function
 */
/* istanbul ignore next */
export function userOutput(
	pokemon2DWorld: number[][],
	directionToWalk: string,
	caughtPokemons: number
): void {
	console.log(
		"Your Directions 🚶‍♂️: ",
		directionToWalk.toUpperCase(),
		caughtPokemons
	);

	console.log("World map: ");
	for (let k = 0; k < pokemon2DWorld.length; k++) {
		console.log("[" + pokemon2DWorld[k].toString() + "]");
	}

	// printMap(pokemon2DWorld);

	console.log("Number of Caught Pokemons: ", caughtPokemons);
}

/* istanbul ignore next */
function printMap(pokemon2DWorld: number[][]): void {
	console.log("Ash initial position map: ");
	for (let k = 0; k < pokemon2DWorld.length; k++) {
		const map: Array<Array<number | string>> = pokemon2DWorld;
		const verticalSize = pokemon2DWorld.length;
		const horizontalSize = pokemon2DWorld[k].length;
		const { verticalCenter, horizontalCenter, north, south, west, east } =
			getCoordinates(verticalSize, horizontalSize);

		map[north][horizontalCenter] = "N";
		map[south][horizontalCenter] = "S";
		map[verticalCenter][horizontalCenter] = "C";
		map[verticalCenter][west] = "O";
		map[verticalCenter][east] = "E";

		const colorizeCaractere = (character: string | number) =>
			`${CONSOLE_COLORS.green}${character}${CONSOLE_COLORS.reset}`;
		const colorizeCenter = `${CONSOLE_COLORS.red}C${CONSOLE_COLORS.reset}`;

		// "^(n|s|e|o)*$", "gi" // => .replace(/(n|s|e|o)/gi, colorizeCaractere())

		console.log(
			"[" +
				map[k]
					.map((position) =>
						position
							.toString()
							.replace(/(n|s|e|o)/gi, colorizeCaractere(position))
					)
					.toString()
					.replace(/C/gi, colorizeCenter) +
				"]",
			// "Center: " + pokemon2DWorldFindCenter,
			"H: ",
			horizontalSize,
			horizontalCenter,
			"V: ",
			verticalSize,
			verticalCenter
		);
	}
}
