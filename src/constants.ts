export enum sysMessage {
	USER_INPUT = "Por favor, insira as movimentações do Ash usando os pontos cardinais (N,S, E ou O): ",
	ERROR_INVALID_DIRECTIONS = "Você introduziu algum caractere que não pertence aos pontos cardiais (N,S,E ou O)",
	ERROR_NO_INPUT = "Você não introduziu nenhuma movimentação para o Ash relativas aos pontos cardiais (N,S,E ou O)",
	ERROR_UNDER_THAN_5 = "the map range must be greater or equal to 5",
}
