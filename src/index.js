import {autoResizeTextarea} from './auto-resize.js';
import {deepMerge} from './deep-merge.js';
import {defaultOptions} from './default-options.js';
import {enableWordWrap} from './word-wrap.js';

export function highlightAll(options = defaultOptions) {
	for (const element of document
		.querySelectorAll('textarea')) {
		highlight(element, options);
	}
}

export function highlight(textarea, options = defaultOptions) {
	options = deepMerge(defaultOptions, options);

	if (options.autoResizeTextarea) {
		autoResizeTextarea(textarea);
	}

	if (options.wordWrap) {
		enableWordWrap(textarea);
	}

	textarea.addEventListener('keydown', event => {});
}
