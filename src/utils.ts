/**
 * Returns the calculated bidimensional array for each first dimension
 * @param mainDimension array of numbers bidimensional
 * @param firstDimension index of first dimension
 * @param secondDimension index of second dimension
 * @returns array of numbers bidimensional
 */
export function setSecondDimension(
	mainDimension: number[][],
	firstDimension: number,
	secondDimension: number
) {
	if (
		mainDimension[firstDimension] &&
		mainDimension[firstDimension].length > 0
	) {
		return [...mainDimension[firstDimension], secondDimension];
	}
	return [secondDimension];
}
