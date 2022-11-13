export type PositionType = {
	vertical: number;
	horizontal: number;
};

export type CoordinatesTypes = {
	verticalCenter: number;
	horizontalCenter: number;
	north: number;
	south: number;
	west: number;
	east: number;
};

export type GenerateNewPositionTypes = {
	position: PositionType;
	coordinates: CoordinatesTypes;
};
