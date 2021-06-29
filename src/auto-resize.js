export function autoResizeTextarea(textarea) {
	textarea.addEventListener('input', resize);
	textarea.addEventListener('keydown', resize);
	resize.bind(textarea)();
}

function resize() {
	this.style.height = '24px';
	this.style.height = this.scrollHeight + 'px';
}
