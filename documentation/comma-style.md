Commas should be placed on last on the line, not first!

```js
var foo = 'bar'
  , bar = foo;

console.log('bar', bar);
```

```output
Line 5, column 4: ',' should be placed last.
```

This is good:

```js
var foo = 'bar',
    bar = foo;

console.log('bar', bar);
```
