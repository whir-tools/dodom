
// Takes a htmlish string and returns a fragment

module.exports = function dodom (htmlish) {
	
	if (typeof htmlish !== 'string') {
		throw new Error('Expected a string');
	}

	var div = document.createElement('div');
	var frag = document.createDocumentFragment();

	div.innerHTML = htmlish;

	while (div.firstChild) {
		frag.appendChild(div.firstChild);
	}

	return frag;

};