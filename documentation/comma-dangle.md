Should complain about trailing commas in both objects and lists.

```js
console.log({
    foo: 'bar',
    bar: 'foo',
});
```
```output
Line 6, column 15: Unexpected trailing comma.
```

```js
console.log([1, 2, ]);
```
```output
Line 14, column 18: Unexpected trailing comma.
```
