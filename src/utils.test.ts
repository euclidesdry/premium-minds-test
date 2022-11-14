import {
	CoordinatesTypes,
	GenerateNewPositionTypes,
	PositionType,
} from "./@types/position";
import {
	getCoordinates,
	getCurrentPosition,
	setSecondDimension,
} from "./utils";

// Mock for the function setSecondDimension
const SECOND_DIMENSION_MATRIX: number[][] = [];

const MOCK_VALUE_TO_ADD = 1;
const MOCK_SECOND_VALUE_TO_ADD = 10;

const MOCK_EMPTY_WORLD_ARRAY_EXPECTED = [0];
const MOCK_1_ELEMENT_WORLD_ARRAY_EXPECTED = [0, MOCK_VALUE_TO_ADD];
const MOCK_3_ELEMENTS_WORLD_ARRAY_EXPECTED = [
	0,
	1,
	2,
	MOCK_SECOND_VALUE_TO_ADD,
];

// Mock for the function getCoordinates
const MOCK_INITIAL_SQUARE_MATRIX_SIZE = 5;
const MOCK_CENTRAL_AXIS = Math.floor(MOCK_INITIAL_SQUARE_MATRIX_SIZE / 2);
const MOCK_NEW_COORDINATES = [6, 8]; // [VerticalAxis, HorizontalAxis]

const MOCK_INITIAL_COORDINATES_WITH_CENTRAL_AXIS_EXPECTED = {
	verticalCenter: MOCK_CENTRAL_AXIS,
	horizontalCenter: MOCK_CENTRAL_AXIS,
	north: MOCK_CENTRAL_AXIS - 1,
	south: MOCK_CENTRAL_AXIS + 1,
	west: MOCK_CENTRAL_AXIS - 1,
	east: MOCK_CENTRAL_AXIS + 1,
} as CoordinatesTypes;

const MOCK_NEW_COORDINATES_EXPECTED = {
	verticalCenter: MOCK_NEW_COORDINATES[0],
	horizontalCenter: MOCK_NEW_COORDINATES[1],
	north: MOCK_NEW_COORDINATES[0] - 1,
	south: MOCK_NEW_COORDINATES[0] + 1,
	west: MOCK_NEW_COORDINATES[1] - 1,
	east: MOCK_NEW_COORDINATES[1] + 1,
} as CoordinatesTypes;

// Mock for the function getCurrentPosition
const MOCK_NORTH_MOVEMENT = "N";
const MOCK_SOUTH_MOVEMENT = "S";
const MOCK_WEST_MOVEMENT = "O";
const MOCK_EAST_MOVEMENT = "E";
const MOCK_CURRENT_COORDINATES = {
	horizontal: 5,
	vertical: 10,
} as PositionType; // [VerticalAxis, HorizontalAxis]

const MOCK_COORDINATES = {
	verticalCenter: MOCK_CURRENT_COORDINATES.vertical,
	horizontalCenter: MOCK_CURRENT_COORDINATES.horizontal,
	north: MOCK_CURRENT_COORDINATES.vertical - 1,
	south: MOCK_CURRENT_COORDINATES.vertical + 1,
	west: MOCK_CURRENT_COORDINATES.horizontal - 1,
	east: MOCK_CURRENT_COORDINATES.horizontal + 1,
} as CoordinatesTypes;

const MOCK_NORTH_COORDINATE_EXPECTED = {
	position: {
		vertical: MOCK_COORDINATES.north,
		horizontal: MOCK_CURRENT_COORDINATES.horizontal,
	},
	coordinates: MOCK_COORDINATES,
} as GenerateNewPositionTypes;

const MOCK_SOUTH_COORDINATE_EXPECTED = {
	position: {
		vertical: MOCK_COORDINATES.south,
		horizontal: MOCK_CURRENT_COORDINATES.horizontal,
	},
	coordinates: MOCK_COORDINATES,
} as GenerateNewPositionTypes;

const MOCK_WEST_COORDINATE_EXPECTED = {
	position: {
		vertical: MOCK_CURRENT_COORDINATES.vertical,
		horizontal: MOCK_COORDINATES.west,
	},
	coordinates: MOCK_COORDINATES,
} as GenerateNewPositionTypes;

const MOCK_EAST_COORDINATE_EXPECTED = {
	position: {
		vertical: MOCK_CURRENT_COORDINATES.vertical,
		horizontal: MOCK_COORDINATES.east,
	},
	coordinates: MOCK_COORDINATES,
} as GenerateNewPositionTypes;

describe("utils", () => {
	describe("setSecondDimension function", () => {
		it("should add to the array from given second dimension empty array", () => {
			const expectedArray = setSecondDimension(SECOND_DIMENSION_MATRIX, 0, 0);

			expect(expectedArray).toEqual(MOCK_EMPTY_WORLD_ARRAY_EXPECTED);
		});

		it(`should add ${MOCK_VALUE_TO_ADD} to the array from given second dimension with 1 elements`, () => {
			SECOND_DIMENSION_MATRIX[0] = [0];
			const expectedArray = setSecondDimension(
				SECOND_DIMENSION_MATRIX,
				0,
				MOCK_VALUE_TO_ADD
			);

			expect(expectedArray).toEqual(MOCK_1_ELEMENT_WORLD_ARRAY_EXPECTED);
		});

		it(`should add ${MOCK_SECOND_VALUE_TO_ADD} to the array from given second dimension with 3 elements`, () => {
			SECOND_DIMENSION_MATRIX[0] = [0, 1, 2];
			const expectedArray = setSecondDimension(
				SECOND_DIMENSION_MATRIX,
				0,
				MOCK_SECOND_VALUE_TO_ADD
			);

			expect(expectedArray).toEqual(MOCK_3_ELEMENTS_WORLD_ARRAY_EXPECTED);
		});
	});

	describe("getCoordinates function", () => {
		it("should return an object with calculated coordinates axis by the vertical, horizontal and considering central axis", () => {
			const expectedCoordinates = getCoordinates(
				MOCK_INITIAL_SQUARE_MATRIX_SIZE,
				MOCK_INITIAL_SQUARE_MATRIX_SIZE
			);

			expect(expectedCoordinates).toMatchObject(
				MOCK_INITIAL_COORDINATES_WITH_CENTRAL_AXIS_EXPECTED
			);
		});

		it("should return an object with calculated new coordinates axis by the current position", () => {
			const [verticalAxis, horizontalAxis] = MOCK_NEW_COORDINATES;
			const expectedCoordinates = getCoordinates(
				verticalAxis,
				horizontalAxis,
				false
			);

			expect(expectedCoordinates).toMatchObject(MOCK_NEW_COORDINATES_EXPECTED);
		});
	});

	describe("getCurrentPosition function", () => {
		it("should move to North direction correctly", () => {
			const expectedCoordinates = getCurrentPosition(
				MOCK_NORTH_MOVEMENT,
				MOCK_CURRENT_COORDINATES
			);

			expect(expectedCoordinates).toMatchObject(MOCK_NORTH_COORDINATE_EXPECTED);
		});

		it("should move to South direction correctly", () => {
			const expectedCoordinates = getCurrentPosition(
				MOCK_SOUTH_MOVEMENT,
				MOCK_CURRENT_COORDINATES
			);

			expect(expectedCoordinates).toMatchObject(MOCK_SOUTH_COORDINATE_EXPECTED);
		});

		it("should move to West direction correctly", () => {
			const expectedCoordinates = getCurrentPosition(
				MOCK_WEST_MOVEMENT,
				MOCK_CURRENT_COORDINATES
			);

			expect(expectedCoordinates).toMatchObject(MOCK_WEST_COORDINATE_EXPECTED);
		});

		it("should move to East direction correctly", () => {
			const expectedCoordinates = getCurrentPosition(
				MOCK_EAST_MOVEMENT,
				MOCK_CURRENT_COORDINATES
			);

			expect(expectedCoordinates).toMatchObject(MOCK_EAST_COORDINATE_EXPECTED);
		});
	});
});
