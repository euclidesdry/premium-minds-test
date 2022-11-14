import {
	CoordinatesTypes,
	GenerateNewPositionTypes,
	PositionType,
} from "./@types/position";
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
): CoordinatesTypes {
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

/**
 * calculate new position of the Ash on the map with the cardinal points and coordinates for the next Ash movement for each direction (N,S, W or E) + center axis
 * @param currentMovement movement direction of the Ash on the cardinal points (N,S, W or E)
 * @param currentPosition y and x position of the Ash on the cardinal points
 * @returns current position and coordinates with the next movement for each direction
 */
export function getCurrentPosition(
	currentMovement: string,
	currentPosition: PositionType
): GenerateNewPositionTypes {
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

/**
 * calculate the map size by the number of movements
 * @param numberOfDirection number of Ash movement directions
 * @returns new map square size range
 */
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
 * A simple user output
 */
/* istanbul ignore next */
export function userOutput(
	pokemon2DWorld: number[][],
	directionToWalk: string,
	caughtPokemons: number
): void {
	console.log(
		"\n\nLast Ash Direction 🚶‍♂️: ",
		`${CONSOLE_COLORS.green}${directionToWalk.toUpperCase()}${
			CONSOLE_COLORS.reset
		}`,
		" - current caught Pokemons",
		caughtPokemons
	);

	const colorizeLastSteep = `${CONSOLE_COLORS.greenBg}0${CONSOLE_COLORS.reset}`;

	console.log("World map: ");
	for (let k = 0; k < pokemon2DWorld.length; k++) {
		console.log(
			"[" + pokemon2DWorld[k].toString().replace(/0/gi, colorizeLastSteep) + "]"
		);
	}
}
