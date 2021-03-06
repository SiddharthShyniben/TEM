export const defaultOptions = {
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
