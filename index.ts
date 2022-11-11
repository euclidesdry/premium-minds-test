"use strict";

import { generate2DWorld } from "./src/generate";

const caughtPokemons = 0;

function catchPokemon(directionsToWalk: string): number {
	const pokemon2DWorld = generate2DWorld();

	// Output
	console.log("Directions 🚶‍♂️: ", directionsToWalk, caughtPokemons);
	console.log("World: ");
	for (let k = 0; k < pokemon2DWorld.length; k++) {
		console.log(pokemon2DWorld[k]);
	}

	return caughtPokemons;
}

catchPokemon("E");
