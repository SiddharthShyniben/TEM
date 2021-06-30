var TEM = (function (exports) {
	'use strict';

	function autoResizeTextarea(textarea) {
		textarea.addEventListener('input', resize);
		textarea.addEventListener('keydown', resize);
		resize.bind(textarea)();
	}

	function resize() {
		this.style.height = '24px';
		this.style.height = this.scrollHeight + 'px';
	}

	function merge(target, source) {
		for (const key of Object.keys(source)) {
			if (source[key] instanceof Object) {
				Object.assign(source[key], merge(target[key], source[key]));
			}
		}

		// Join `target` and modified `source`
		Object.assign(target || {}, source);
		return target;
	}

	const defaultOptions = {
		useTabToIndent: false,
		autoResizeTextarea: true,
		useSnippets: true,
		useDoubleChars: true,
		wordWrap: false,
		snippets: {
			'1#': '# ',
			'2#': '## ',

			// These make sense
			'3#': '### ',
			'4#': '#### ',
			'5#': '##### ',
			'6#': '###### ',

			// Lorem ipsum
			Lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, ' +
				'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam' +
				' blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!'

		},
		doubleChars: {
			'<': {value: '<>', pos: 1},
			'(': {value: '()', pos: 1},
			'{': {value: '{}', pos: 1},
			'[': {value: '[]', pos: 1},
			'\'': element => {
				// ' ' to force regex to thinking that there is a space
				const previousChar = element.value.charAt(element.selectionStart - 1) || ' ';
				console.log(previousChar);
				return {
					value: previousChar.search(/\s/gim) ? '\'' : '\'\'',
					pos: 1
				};
			},
			'"': {value: '""', pos: 1},
			'“': {value: '“”', pos: 1},
			'`': {value: '``', pos: 1},
			// '‘': {value: '‘’', pos: 1},
			'‘': element => {
				// ' ' to force regex to thinking that there is a space
				const previousChar = element.value.charAt(element.selectionStart - 1) || ' ';
				console.log(previousChar);
				return {
					value: previousChar.search(/\s/gim) ? '’' : '‘’',
					pos: 1
				};
			},
			'«': {value: '«»', pos: 1},
			'「': {value: '「」', pos: 1},

			// Markdown specific, not really useful every time
			// '*': {value: '**', pos: 1},
			// '_': {value: '__', pos: 1},
			// '>': {value: '> ', pos: 2},
			// '~': {value: '~~', pos: 1},

			',': {value: ', ', pos: 2}
		}
	};

	function parseSnippet(snippets, event, element) {
		const snippet = snippets[event.key];

		if (snippet instanceof Function) {
			return snippet(element);
		}

		return snippet ?? {value: event.key, pos: 1};
	}

	function enableWordWrap(textarea) {
		// Just in case
		textarea.setAttribute('wrap', 'soft');

		textarea.style.whiteSpace = 'nowrap';
		textarea.style.overflow = 'auto';
	}

	function enhanceAll(options = defaultOptions) {
		for (const element of document
			.querySelectorAll('textarea')) {
			enhance(element, options);
		}
	}

	function enhance(textarea, options = defaultOptions) {
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

				textarea.selectionStart = pos + snippet.pos;
				textarea.selectionEnd = textarea.selectionStart;
			}
		});
	}

	exports.enhance = enhance;
	exports.enhanceAll = enhanceAll;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
