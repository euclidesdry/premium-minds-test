export enum sysMessage {
	USER_INPUT = "Por favor, insira as movimentações do Ash usando os pontos cardinais (N,S, E ou O): ",
	USER_INPUT_ASK_FOR_DETAILS = "Você vai querer visualizar os detalhes? (Y, N)",

	ERROR_INVALID_DIRECTIONS = "Você introduziu algum caractere que não pertence aos pontos cardiais (N,S,E ou O)",
	ERROR_NO_INPUT = "Você não introduziu nenhuma movimentação para o Ash relativas aos pontos cardiais (N,S,E ou O)",
	ERROR_UNDER_THAN_5 = "the map range must be greater or equal to 5",
}

export enum CONSOLE_COLORS {
	reset = "\x1b[0m",

	//text color
	black = "\x1b[30m",
	red = "\x1b[31m",
	green = "\x1b[32m",
	yellow = "\x1b[33m",
	blue = "\x1b[34m",
	magenta = "\x1b[35m",
	cyan = "\x1b[36m",
	white = "\x1b[37m",

	//background color
	blackBg = "\x1b[40m",
	redBg = "\x1b[41m",
	greenBg = "\x1b[42m",
	yellowBg = "\x1b[43m",
	blueBg = "\x1b[44m",
	magentaBg = "\x1b[45m",
	cyanBg = "\x1b[46m",
	whiteBg = "\x1b[47m",
}
