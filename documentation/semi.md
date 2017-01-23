Onelint requires you to use semicolons.

```js
/* eslint no-unused-vars: 0 */
var foo = 'bar';
```

Omitting them will result in an error.

```js
/* eslint no-unused-vars: 0 */
var foo = 'bar'
```

```output
Line 12, column 16: Missing semicolon.
```
