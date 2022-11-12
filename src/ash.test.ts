import { catchPokemon } from "./ash";

const MOCK_1ST_INPUT_EXAMPLE = "E";
const MOCK_2ND_INPUT_EXAMPLE = "NESO";
const MOCK_3RD_INPUT_EXAMPLE = "NSNSNSNSNS";

const MOCK_1ST_RETURN_EXAMPLE = 2;
const MOCK_2ND_RETURN_EXAMPLE = 4;
const MOCK_3RD_RETURN_EXAMPLE = 2;

describe("Ash", () => {
	describe("catchPokemon function", () => {
		it(`should return ${MOCK_1ST_RETURN_EXAMPLE} as the first Premium Minds example`, () => {
			const expectedPokemon = catchPokemon(MOCK_1ST_INPUT_EXAMPLE);
			expect(expectedPokemon).toBe(2);
		});

		it(`should return ${MOCK_2ND_RETURN_EXAMPLE} as the second Premium Minds example`, () => {
			const expectedPokemon = catchPokemon(MOCK_2ND_INPUT_EXAMPLE);
			expect(expectedPokemon).toBe(4);
		});

		it(`should return ${MOCK_3RD_RETURN_EXAMPLE} as the third Premium Minds example`, () => {
			const expectedPokemon = catchPokemon(MOCK_3RD_INPUT_EXAMPLE);
			expect(expectedPokemon).toBe(2);
		});
	});
});
