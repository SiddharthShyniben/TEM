import {autoResizeTextarea} from './auto-resize.js';
import {merge} from './deep-merge.js';
import {defaultOptions} from './default-options.js';
import {parseDoubleChar} from './parse-snips';
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

	if (options.wordWrap) {
		enableWordWrap(textarea);
	}

	textarea.addEventListener('keydown', event => {
		const pos = textarea.selectionStart;
		if (options.useDoubleChars) {
			if (options.doubleChars[event.key]) {
				event.preventDefault();
				const snippet = parseDoubleChar(options.useDoubleChars, event, textarea);
				textarea.value =
					textarea.value.slice(0, pos) +
					snippet.value +
					textarea.value.slice(editing.selectionEnd);

				textarea.selectionStart = textarea.selectionEnd = pos + snippet.pos;
			}
		}
	});
}
