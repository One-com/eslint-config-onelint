
```js
/* eslint no-unused-vars: 0 */

var foo = {
    foo: 'bar'
};
```

Omitting them will result in an error.

```js
/* eslint no-unused-vars: 0 */

var foo = {
    foo :'bar',
    bar:'baz',
    baz : 'qux'
};
```

```output
Line 16, column 5: Extra space after key 'foo'.
Line 16, column 10: Missing space before value for key 'foo'.
Line 17, column 9: Missing space before value for key 'bar'.
Line 18, column 5: Extra space after key 'baz'.
```
