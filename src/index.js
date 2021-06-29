import {autoResizeTextarea} from './auto-resize.js';
import {merge} from './deep-merge.js';
import {defaultOptions} from './default-options.js';
import {parseSnippet} from './parse-snips.js';
import {enableWordWrap} from './word-wrap.js';

export function enhanceAll(options = defaultOptions) {
	for (const element of document
		.querySelectorAll('textarea')) {
		enhance(element, options);
	}
}

export function enhance(textarea, options = defaultOptions) {
	options = merge(defaultOptions, options);

	if (options.autoResizeTextarea) {
		autoResizeTextarea(textarea);
	}

	if (!options.wordWrap) {
		enableWordWrap(textarea);
	}

	textarea.addEventListener('keydown', event => {
		const pos = textarea.selectionStart;
		if (options.useDoubleChars && options.doubleChars[event.key]) {
			event.preventDefault();
			const snippet = parseSnippet(options.doubleChars, event, textarea);
			textarea.value =
					textarea.value.slice(0, pos) +
					snippet.value +
					textarea.value.slice(textarea.selectionEnd);

			textarea.selectionStart = textarea.selectionEnd = pos + snippet.pos;
		}
	});
}
