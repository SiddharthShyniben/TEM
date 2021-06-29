# TEM: **TE**xtarea i**M**proved

**TEM** (**TE**xtarea i**M**proved) is a **small but powerful** script that extends the features of a plain textarea. It is built based on everything we love about our favorite text editors. It works **everywhere you can run JavaScript** and works on almost all textareas and textarea based elements.

## Installation

TEM can be used 
-	As a bookmarklet, DevTools Snippet, etc.

	You can either copy [the source code](./dist/index.js) and paste it in your bookmarklet, or you can use the following script which loads the latest version of TEM from the jsDelivr CDN:

	```js
	(() => {
		document
			.getElementsByTagName('head')[0]
			.appendChild(document.createElement('script'))
			.src='https://cdn.jsdelivr.net/gh/SiddharthShyniben/TEM/dist/index.js';

		setTimeout() => TEM.enhanceAll({/* Insert your options here */}), 1000)
	})();
	```

	Since GitHub doesn't allow you to make bookmarklets in READMEs, you can visit [this link]() if you
	want to drag the bookmarklet into your bookmarks bar. Or you can just copy this and paste it in
	a bookmarklet manually:
	
	```javascript
	(function(){document.getElementsByTagName("head")[0].appendChild(document.createElement("script")).src="https://cdn.jsdelivr.net/gh/SiddharthShyniben/TEM/dist/index.js";setTimeout(function(){TEM.enhanceAll({/*Options*/})},1E3)})();
	```

	Just don't forget to customize the options if you want to.

-	As a library.

	As you've seen above, TEM has a tiny API which can be used as a library in you websites. Just
	add the following code to the head:

	```html
	<script src='https://cdn.jsdelivr.net/gh/SiddharthShyniben/TEM/dist/index.js'></script>
	```

	to load the latest version of TEM. You can change the URL to include a specific version if you like.

	The full documentation is [here](#documentation)

## Contributing to TEM

All contributions are welcome! To contribute, follow these steps:

1. Fork this repository
2. Create a branch
3. Make your changes and commit them
4. Push to the branch
5. Create a pull request

You can also contribute ideas for snippets or double character insertions using issues.

## License

This project is released under the [GNU General Public License](./LICENSE)