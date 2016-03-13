A comma should never have a space before it, but always have a space after it,
or a line break in place of a space.

```js
function foobar(foo , bar) {
    console.log(foo, bar);
}
foobar();
```
```output
Line 5, column 21: There should be no space before ','.
```

```js
console.log('foo', 'bar');
```

```js
console.log('foo','bar');
```
```output
Line 19, column 18: A space is required after ','.
```
