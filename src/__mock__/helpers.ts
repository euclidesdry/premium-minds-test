export const MOCK = {
	helper: {
		reverse: {
			path: (string: string) => {
				return string
					.split("")
					.reverse()
					.map((currentLetter) => {
						switch (currentLetter.toLocaleLowerCase()) {
							case "n":
								return currentLetter.replace(/N/i, "S");
							case "s":
								return currentLetter.replace(/S/i, "N");
							case "e":
								return currentLetter.replace(/E/i, "O");
							case "o":
								return currentLetter.replace(/O/i, "E");
						}
					})
					.join("");
			},
		},
	},
};
