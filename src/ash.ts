import { PositionType } from "./@types/position";
import { sysMessage } from "./constants";
import { generate2DWorld } from "./generate";
import {
	calcMapExpansion,
	getCoordinates,
	getCurrentPosition,
	userOutput,
} from "./utils";

export function catchPokemon(
	directionsToWalk: string,
	showDetails = false
): number {
	let caughtPokemons = 1;
	const cardinalPointsRegExp = new RegExp("^(n|s|e|o)*$", "gi");
	const allDirections: number = directionsToWalk.length;
	const mapExtension: number =
		allDirections > 2 ? calcMapExpansion(allDirections) : 5;
	const pokemon2DWorld: number[][] = generate2DWorld(mapExtension);
	const initialAshPosition = getCoordinates(mapExtension, mapExtension);
	let currentPosition: PositionType = {
		vertical: initialAshPosition.verticalCenter,
		horizontal: initialAshPosition.horizontalCenter,
	};

	pokemon2DWorld[initialAshPosition.verticalCenter][
		initialAshPosition.horizontalCenter
	] = 0;

	/* istanbul ignore if */
	if (showDetails) userOutput(pokemon2DWorld, "C", caughtPokemons);

	if (directionsToWalk.length === 0) {
		throw new Error(sysMessage.ERROR_NO_INPUT);
	}

	// Verifying if the user coordinates gave to the systems are correct to the N, S, E ou O
	if (!cardinalPointsRegExp.test(directionsToWalk)) {
		throw new Error(sysMessage.ERROR_INVALID_DIRECTIONS);
	}

	// Walk to the all given directions
	for (let i = 0; i < allDirections; i++) {
		const currentMovement = directionsToWalk[i];
		const newAshPosition = getCurrentPosition(
			currentMovement,
			currentPosition,
			mapExtension
		);
		const selectedPosition =
			pokemon2DWorld[newAshPosition.position.vertical][
				newAshPosition.position.horizontal
			];

		// adding caught pokemon to the Ash collection
		if (selectedPosition === 1) {
			// console.log("selectedPosition: ", selectedPosition);
			caughtPokemons = caughtPokemons + selectedPosition;
			pokemon2DWorld[newAshPosition.position.vertical][
				newAshPosition.position.horizontal
			] = 0;
		}

		currentPosition = newAshPosition.position;

		// Output
		/* istanbul ignore if */
		if (showDetails)
			userOutput(pokemon2DWorld, currentMovement, caughtPokemons);
	}

	return caughtPokemons;
}
