"use strict";

import promptSync from "prompt-sync";

import { catchPokemon } from "./src/ash";
import { USER_INPUT_MSG } from "./src/constants";

const prompt = promptSync();

const userInput = prompt(USER_INPUT_MSG);
catchPokemon(userInput);
