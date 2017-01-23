Object properties should be spread across different lines:

```js
/* eslint no-unused-vars: 0 */

var foo = {
    foo: 'bar',
    bar: 'foo'
};
```

Or all be on the same line:

```js
/* eslint no-unused-vars: 0 */

var foo = { foo: 'bar', bar: 'foo' };
```

But not mixing the cases.

```js
/* eslint no-unused-vars: 0 */

var foo = {
    foo: 'bar', bar: 'baz',
    qux: 'baz'
};
```

```output
Line 26, column 17: Object properties must go on a new line if they aren't all on the same line
```
