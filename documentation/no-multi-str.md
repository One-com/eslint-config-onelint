Multiline strings are bad!

```js
var foo = 'foo\\
bar';
console.log(foo);
```

```output
Line 4, column 11: Multiline support is limited to browsers supporting ES5 only.
```

But concatenated strings are fine:

```js
var foo = 'foo\\n' +
          'bar';
console.log(foo);
```
