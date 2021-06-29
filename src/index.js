import {autoResizeTextarea} from './auto-resize';
import {deepMerge} from './deep-merge';
import {defaultOptions} from './default-options';
import {enableWordWrap} from './word-wrap';


export function highlightAll(options = defaultOptions) {
	document
		.querySelectorAll('textarea')
		.forEach(element => highlight(element, options))
}

export function highlight(textarea, options = defaultOptions) {
	options = deepMerge(defaultOptions, options);

	if (options.autoResizeTextarea) autoResizeTextarea(textarea)
	if (options.wordWrap) enableWordWrap(textarea)

	textarea.addEventListener('keydown', function (event) {

	});
}