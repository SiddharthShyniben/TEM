export function parseDoubleChar(doubleChars, event, element) {
	const doubleChar = doubleChars[event.key];

	if (doubleChar instanceof Function) {
		return doubleChar(element);
	}

	return doubleChar ?? {value: event.key, pos: 1};
}

export function parseSnippet(snippets, key) {}
