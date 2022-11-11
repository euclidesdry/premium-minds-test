"use strict";

import promptSync from "prompt-sync";

import { catchPokemon } from "./src/ash";
import { sysMessage } from "./src/constants";

const prompt = promptSync();

const userInput = prompt(sysMessage.USER_INPUT);

catchPokemon(userInput);
