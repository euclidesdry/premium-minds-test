import { sysMessage } from "./constants";
import { generate2DWorld } from "./generate";
import { userOutput } from "./utils";

export function catchPokemon(directionsToWalk: string): number {
	const caughtPokemons = 0;
	const cardinalPointsRegExp = new RegExp("^(n|s|e|o)*$", "gi");
	const totalDirections = directionsToWalk.length;
	const mapExtension = totalDirections > 3 ? totalDirections * 2 : 5;
	const pokemon2DWorld = generate2DWorld(mapExtension);

	if (directionsToWalk.length === 0) {
		throw new Error(sysMessage.ERROR_NO_INPUT);
	}

	// Verifying if the user coordinates gave to the systems are correct to the N, S, E ou O
	if (!cardinalPointsRegExp.test(directionsToWalk)) {
		throw new Error(sysMessage.ERROR_INVALID_DIRECTIONS);
	}

	// Output
	userOutput(pokemon2DWorld, directionsToWalk, caughtPokemons);

	return caughtPokemons;
}
