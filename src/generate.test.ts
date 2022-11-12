import { sysMessage } from "./constants";
import { generate2DWorld } from "./generate";

const MOCK_SQUARE_MATRIX_NUM = 8;
const MOCK_SQUARE_MATRIX_NUM_2 = 1000;
const MOCK_FAIL_SQUARE_MATRIX_NUM = 0;

describe("generate2DWorld function", () => {
	it(`should generate a square bidimensional matrix of 5 items`, () => {
		const generated2DWorld = generate2DWorld();
		const expected =
			generated2DWorld.length === 5 && generated2DWorld.length === 5;

		expect(expected).toBeTruthy();
	});

	it(`should generate a square bidimensional of given matrix of ${MOCK_SQUARE_MATRIX_NUM} items`, () => {
		const generated2DWorld = generate2DWorld(MOCK_SQUARE_MATRIX_NUM);
		const expected =
			generated2DWorld.length === MOCK_SQUARE_MATRIX_NUM &&
			generated2DWorld.length === MOCK_SQUARE_MATRIX_NUM;

		expect(expected).toBeTruthy();
	});

	it(`should generate a square bidimensional of given matrix of ${MOCK_SQUARE_MATRIX_NUM_2} items`, () => {
		const generated2DWorld = generate2DWorld(MOCK_SQUARE_MATRIX_NUM_2);
		const expected =
			generated2DWorld.length === MOCK_SQUARE_MATRIX_NUM_2 &&
			generated2DWorld.length === MOCK_SQUARE_MATRIX_NUM_2;

		expect(expected).toBeTruthy();
	});

	it(`should throw an error for value smaller than 5`, () => {
		expect(() => {
			generate2DWorld(MOCK_FAIL_SQUARE_MATRIX_NUM);
		}).toThrow(Error);
		expect(() => {
			generate2DWorld(MOCK_FAIL_SQUARE_MATRIX_NUM);
		}).toThrow(sysMessage.ERROR_UNDER_THAN_5);
	});
});
