import { catchPokemon } from "./ash";

describe("Ash", () => {
	describe("catchPokemon function", () => {
		it("should return 2", () => {
			const expectedPokemon = catchPokemon("E");
			expect(expectedPokemon).toBe(2);
		});

		it("should return 4", () => {
			const expectedPokemon = catchPokemon("NESO");
			expect(expectedPokemon).toBe(4);
		});

		it("should return 2", () => {
			const expectedPokemon = catchPokemon("NSNSNSNSNS");
			expect(expectedPokemon).toBe(2);
		});
	});
});
