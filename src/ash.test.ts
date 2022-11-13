import { catchPokemon } from "./ash";
import { sysMessage } from "./constants";

const MOCK_1ST_INPUT_EXAMPLE = "E";
const MOCK_2ND_INPUT_EXAMPLE = "NESO";
const MOCK_3RD_INPUT_EXAMPLE = "NSNSNSNSNS";

const MOCK_INVALID_INPUT = "NSNAGSRT";

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

		describe("testing error handlers", () => {
			it(`should return ${MOCK_1ST_RETURN_EXAMPLE} with the second parameter`, () => {
				const expectedPokemon = catchPokemon(MOCK_1ST_INPUT_EXAMPLE, false);
				expect(expectedPokemon).toBe(2);
			});

			it(`should throw the error "${sysMessage.ERROR_NO_INPUT}..." for value empty value`, () => {
				expect(() => {
					catchPokemon("");
				}).toThrow(Error);
				expect(() => {
					catchPokemon("");
				}).toThrow(sysMessage.ERROR_NO_INPUT);
			});

			it(`should throw the error "${sysMessage.ERROR_INVALID_DIRECTIONS}..." for value empty value`, () => {
				expect(() => {
					catchPokemon(MOCK_INVALID_INPUT);
				}).toThrow(Error);
				expect(() => {
					catchPokemon(MOCK_INVALID_INPUT);
				}).toThrow(sysMessage.ERROR_INVALID_DIRECTIONS);
			});
		});
	});
});
