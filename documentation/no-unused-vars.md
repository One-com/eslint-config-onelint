Any unused variables will trigger a warning.

```js
var foo = 'bar';
```
```output
Line 4, column 5: 'foo' is assigned a value but never used.
```

Any assigned but unused variables will also trigger a warning.

```js
var foo = 'foo';
```
```output
Line 13, column 5: 'foo' is assigned a value but never used.
```

But it should not complain about unused function parameters:

```js
/* eslint no-undef: 0 */
express.use(function (req, res, next) {
    return res.end();
});
```
