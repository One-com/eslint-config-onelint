Should require use of dot notation.

Should allow to put keywords in bracket notation instead.

The following should not cause problems:
```js
/* eslint no-unused-vars: 0 */
var obj = {};
var bar = 'foobar';
obj.foo = 'foobar';
obj[bar] = 'foobar';
obj['class'] = 'bar';
```

The following is considered problems:

```js
/* eslint no-unused-vars: 0 */
var obj = {};

obj['bar'] = 'foo';
```
```output
Line 21, column 1: ["bar"] is better written in dot notation.
```
