export function parseDoubleChar(doubleChars, event, element) {
	let doubleChar = doubleChars[event.key];

	// if (doubleChar instanceof Function) {
	// 	return doubleChar(element)
	// }
	return doubleChar ?? {value: event.key, pos: 1};
}

export function parseSnippet(snippets, key) {}