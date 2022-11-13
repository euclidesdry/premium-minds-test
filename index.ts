"use strict";

import promptSync from "prompt-sync";

import { catchPokemon } from "./src/ash";
import { sysMessage } from "./src/constants";

const prompt = promptSync();

const userInput = prompt(sysMessage.USER_INPUT);
const userInputAllowedDetails = prompt(sysMessage.USER_INPUT_ASK_FOR_DETAILS);
const isAllDetailsAllowed = userInputAllowedDetails.toLowerCase() === "a";
const isDetailsAllowed =
	userInputAllowedDetails.toLowerCase() === "y" || isAllDetailsAllowed;
const catchPokemonsByAsh = catchPokemon(
	userInput,
	isDetailsAllowed,
	isAllDetailsAllowed ? "all" : "last"
);

console.log(`O Ash acabou pegando ${catchPokemonsByAsh} Pokemons`);
