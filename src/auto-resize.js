export function autoResizeTextarea(textarea) {
	textarea.addEventListener('input', resize)
	textarea.addEventListener('keydown', resize)
	resize(textarea);
}

function resize(textarea) {
	(textarea || this).style.height = '24px';
	(textarea || this).style.height = editing.scrollHeight + 'px';
}