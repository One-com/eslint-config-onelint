Always wrap the function expression of an immediate function invocation in
parenthesis.

```js
(function () {})();
```

```js
(function () {}());
```

```js
var foo = function () {}();
console.log('foo', foo);
```
```output
Line 13, column 11: Wrap an immediate function invocation in parentheses.
```
