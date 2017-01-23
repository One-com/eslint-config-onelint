```js
/* eslint no-undef: 0, no-unused-vars: 0 */
a + b;
a       + b;
a ? b : c;
const a = {b: 1};
var foo = bar;
```

```js
/* eslint no-undef: 0, no-unused-vars: 0 */
a+b;
a+ b;
a +b;
a?b:c;
const a={b: 1};
var foo=bar;
```
```output
Line 12, column 2: Infix operators must be spaced.
Line 13, column 2: Infix operators must be spaced.
Line 14, column 3: Infix operators must be spaced.
Line 15, column 2: Infix operators must be spaced.
Line 16, column 8: Infix operators must be spaced.
Line 17, column 8: Infix operators must be spaced.
```
