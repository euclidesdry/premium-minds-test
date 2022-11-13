import { catchPokemon } from "./ash";
import { sysMessage } from "./constants";
import { MOCK } from "./__mock__/helpers";

// Required Tests cases

const MOCK_1ST_INPUT_EXAMPLE = "E";
const MOCK_2ND_INPUT_EXAMPLE = "NESO";
const MOCK_3RD_INPUT_EXAMPLE = "NSNSNSNSNS";

const MOCK_INVALID_INPUT = "NSNAGSRT";

const MOCK_1ST_RETURN_EXAMPLE = 2;
const MOCK_2ND_RETURN_EXAMPLE = 4;
const MOCK_3RD_RETURN_EXAMPLE = 2;

// ! This Tests are for the Hardest Cases
/**
 * The Graphic representation of the Ash movements for the 1st Hard Case
  [1,1,1,1,1,1,1]
  [1,1,0,0,0,1,1]
  [1,1,0,0,0,1,1]
  [1,1,0,0,1,1,1]
  [1,1,1,0,0,1,1]
  [1,1,1,1,1,1,1]
 */
const MOCK_1ST_HARD_CASE = "NSONOESOESOESNSEO";

/**
 * The Graphic Representation  of the Ash movements for the 2nd Hard Case
	[1,1,1,1,1,1,1]
	[1,0,0,0,0,0,1]
	[1,0,1,1,1,0,1]
	[1,0,1,1,1,0,1]
	[1,0,0,0,0,0,1]
	[1,1,1,1,1,1,1]
 */
const MOCK_2ND_HARD_CASE = "NNNOOOOSSSEEEE"; // Walking in a square points

/**
 * The Graphic Representation  of the Ash movements for the 2nd Hard Case
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,0,0,0,0,0,0,0,1,0,1,1]
	[1,1,0,1,1,1,1,1,0,1,0,1,1]
	[1,1,0,1,0,0,0,1,0,1,0,1,1]
	[1,1,0,1,0,1,0,1,0,1,0,1,1]
	[1,1,0,1,0,1,1,1,0,1,0,1,1]
	[1,1,0,1,0,0,0,0,0,1,0,1,1]
	[1,1,0,1,1,1,1,1,1,1,0,1,1]
	[1,1,0,0,0,0,0,0,0,0,0,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
 */
const MOCK_3RD_HARD_CASE = "NOOSSSEEEENNNNNOOOOOOSSSSSSSEEEEEEEENNNNNNN"; // Walking in spiral

/**
 * The Graphic Representation  of the Ash movements for the 2nd Hard Case
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,0,0,0,0,0,0,0,1,0,1,1]
	[1,1,0,1,1,1,1,1,0,1,0,1,1]
	[1,1,0,1,0,0,0,1,0,1,0,1,1]
	[1,1,0,1,0,1,0,1,0,1,0,1,1]
	[1,1,0,1,0,1,1,1,0,1,0,1,1]
	[1,1,0,1,0,0,0,0,0,1,0,1,1]
	[1,1,0,1,1,1,1,1,1,1,0,1,1]
	[1,1,0,0,0,0,0,0,0,0,0,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
 */
const MOCK_3RD_HARD_CASE_WITH_REVERSE =
	MOCK_3RD_HARD_CASE + MOCK.helper.reverse.path(MOCK_3RD_HARD_CASE); // Walking in spiral and reverse the directions

/**
 * The Graphic Representation  of the Ash movements for the 2nd Hard Case
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,0,0,0,1,0,0,0,0,0,1,1]
	[1,1,0,1,0,0,0,1,0,1,0,1,1]
	[1,1,0,0,0,1,0,1,0,1,0,1,1]
	[1,1,0,1,1,1,0,1,1,1,0,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
 */
const MOCK_4TH_HARD_CASE = "SNNNEESSOENEESSNNNEESSNNEESSS"; // Walking in spiral

const MOCK_1ST_HARD_CASE_RETURN = 10;
const MOCK_2ND_HARD_CASE_RETURN = 14;
const MOCK_3RD_HARD_CASE_RETURN = 44;
const MOCK_4TH_HARD_CASE_RETURN = 23;

describe("Ash", () => {
	describe("catchPokemon function", () => {
		describe("testing required cases", () => {
			it(`should return ${MOCK_1ST_RETURN_EXAMPLE} as the first Premium Minds example`, () => {
				const expectedPokemon = catchPokemon(MOCK_1ST_INPUT_EXAMPLE);
				expect(expectedPokemon).toBe(MOCK_1ST_RETURN_EXAMPLE);
			});

			it(`should return ${MOCK_2ND_RETURN_EXAMPLE} as the second Premium Minds example`, () => {
				const expectedPokemon = catchPokemon(MOCK_2ND_INPUT_EXAMPLE);
				expect(expectedPokemon).toBe(MOCK_2ND_RETURN_EXAMPLE);
			});

			it(`should return ${MOCK_3RD_RETURN_EXAMPLE} as the third Premium Minds example`, () => {
				const expectedPokemon = catchPokemon(MOCK_3RD_INPUT_EXAMPLE);
				expect(expectedPokemon).toBe(MOCK_3RD_RETURN_EXAMPLE);
			});
		});

		describe("testing hardest cases", () => {
			it(`should return ${MOCK_1ST_HARD_CASE_RETURN} for the input "${MOCK_1ST_HARD_CASE}"`, () => {
				const expectedPokemon = catchPokemon(MOCK_1ST_HARD_CASE);
				expect(expectedPokemon).toBe(MOCK_1ST_HARD_CASE_RETURN);
			});

			it(`should return ${MOCK_2ND_HARD_CASE_RETURN} for the input "${MOCK_2ND_HARD_CASE}"`, () => {
				const expectedPokemon = catchPokemon(MOCK_2ND_HARD_CASE);
				expect(expectedPokemon).toBe(MOCK_2ND_HARD_CASE_RETURN);
			});

			it(`should return ${MOCK_3RD_HARD_CASE_RETURN} for the input "${MOCK_3RD_HARD_CASE}"`, () => {
				const expectedPokemon = catchPokemon(MOCK_3RD_HARD_CASE);
				expect(expectedPokemon).toBe(MOCK_3RD_HARD_CASE_RETURN);
			});

			it(`should return ${MOCK_3RD_HARD_CASE_RETURN} for the input "${MOCK_3RD_HARD_CASE_WITH_REVERSE}"`, () => {
				const expectedPokemon = catchPokemon(MOCK_3RD_HARD_CASE_WITH_REVERSE);
				expect(expectedPokemon).toBe(MOCK_3RD_HARD_CASE_RETURN);
			});

			it(`should return ${MOCK_4TH_HARD_CASE_RETURN} for the input "${MOCK_4TH_HARD_CASE}" to write PM (PREMIUM MINDS)`, () => {
				const expectedPokemon = catchPokemon(MOCK_4TH_HARD_CASE);
				expect(expectedPokemon).toBe(MOCK_4TH_HARD_CASE_RETURN);
			});
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
