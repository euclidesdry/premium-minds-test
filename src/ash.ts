import { generate2DWorld } from "./generate";
import { userOutput } from "./utils";

export function catchPokemon(directionsToWalk: string): number {
	const caughtPokemons = 0;
	const totalDirections = directionsToWalk.length;
	const mapExtension = totalDirections > 3 ? totalDirections * 2 : 5;
	const pokemon2DWorld = generate2DWorld(mapExtension);

	// Output
	userOutput(pokemon2DWorld, directionsToWalk, caughtPokemons);

	return caughtPokemons;
}
