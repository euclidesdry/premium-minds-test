import { setSecondDimension } from "./utils";

const SECOND_DIMENSION_MATRIX: number[][] = [];

const MOCK_VALUE_TO_ADD = 1;
const MOCK_SECOND_VALUE_TO_ADD = 10;

const MOCK_EMPTY_WORLD_ARRAY_RETURN = [0];
const MOCK_1_ELEMENT_WORLD_ARRAY_RETURN = [0, MOCK_VALUE_TO_ADD];
const MOCK_3_ELEMENTS_WORLD_ARRAY_RETURN = [0, 1, 2, MOCK_SECOND_VALUE_TO_ADD];

describe("utils", () => {
	describe("setSecondDimension function", () => {
		it("should add to the array from given second dimension empty array", () => {
			const expectedArray = setSecondDimension(SECOND_DIMENSION_MATRIX, 0, 0);

			expect(expectedArray).toEqual(MOCK_EMPTY_WORLD_ARRAY_RETURN);
		});

		it(`should add ${MOCK_VALUE_TO_ADD} to the array from given second dimension with 1 elements`, () => {
			SECOND_DIMENSION_MATRIX[0] = [0];
			const expectedArray = setSecondDimension(
				SECOND_DIMENSION_MATRIX,
				0,
				MOCK_VALUE_TO_ADD
			);

			expect(expectedArray).toEqual(MOCK_1_ELEMENT_WORLD_ARRAY_RETURN);
		});

		it(`should add ${MOCK_SECOND_VALUE_TO_ADD} to the array from given second dimension with 3 elements`, () => {
			SECOND_DIMENSION_MATRIX[0] = [0, 1, 2];
			const expectedArray = setSecondDimension(
				SECOND_DIMENSION_MATRIX,
				0,
				MOCK_SECOND_VALUE_TO_ADD
			);

			expect(expectedArray).toEqual(MOCK_3_ELEMENTS_WORLD_ARRAY_RETURN);
		});
	});
});
