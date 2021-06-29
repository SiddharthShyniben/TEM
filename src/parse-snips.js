export function parseSnippet(snippets, event, element) {
	const snippet = snippets[event.key];

	if (snippet instanceof Function) {
		return snippet(element);
	}

	return snippet ?? {value: event.key, pos: 1};
}