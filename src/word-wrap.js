export function enableWordWrap(textarea) {
	// Just in case
	textarea.setAttribute('wrap', 'soft');

	textarea.style.whiteSpace = 'nowrap';
	textarea.style.overflow = 'auto';
}
