Disallow use of the `with` statement.

```js
var foo = { bar: 'foo' };
with (foo) {
  // ...
}
```
```output
Line 5, column 1: Parsing error: 'with' in strict mode
```

Unfortunately, this test case is failing nomatter what due to strict mode
parsing in eslint, that I couldn't disable...
