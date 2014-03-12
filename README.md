dodom
=====

Turn arbitrary HTML strings into DOM elements.

```

var dodom = require('whir-dodom');

var frag = dodom('<h1>hi there</h1>');

frag.querySelector('h1').textContent === 'hi there'; // true

```

It's not going to catch a load of edge cases, but plenty for simple things. If you need more, then `domify` will be a better choice.

@todo 
- xss filtering
- allow variadic invocation (template > insert a holder at some point > return composed fragment)
