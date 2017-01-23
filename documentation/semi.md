Onelint requires you to use semicolons.

```js
/* eslint no-unused-vars: 0 */
var foo = 'bar';
foo += 'bar';
```

Omitting them will result in an error.

```js
/* eslint no-unused-vars: 0 */
var foo = 'bar';
foo += 'foo'
```

```output
Line 14, column 13: Missing semicolon.
```
