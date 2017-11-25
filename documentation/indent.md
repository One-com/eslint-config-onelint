You must use 4 spaces for indentation.

```js
var foo = 'bar';
if (typeof foo === 'string') {
    foo = foo.toUpperCase();
}
```

```js
var foo = 'bar';
if (typeof foo === 'string') {
  foo = foo.toUpperCase();
}
```

```output
Line 13, column 1: Expected indentation of 4 spaces but found 2.
```

```js
/* eslint no-unused-vars: 0 */
var foo = 'foo';
var num = 0;
switch (foo) {
case 'foo':
    num++;
    break;
case 'bar':
    num--;
    break;
default:
    num = num * 2;
}
```

```js
/* eslint no-unused-vars: 0 */
var foo = 'foo';
var num = 0;
switch (foo) {
    case 'foo':
        num++;
        break;
    case 'bar':
        num--;
        break;
    default:
        num = num * 2;
}
```

```output
Line 42, column 1: Expected indentation of 0 spaces but found 4.
Line 43, column 1: Expected indentation of 4 spaces but found 8.
Line 44, column 1: Expected indentation of 4 spaces but found 8.
Line 45, column 1: Expected indentation of 0 spaces but found 4.
Line 46, column 1: Expected indentation of 4 spaces but found 8.
Line 47, column 1: Expected indentation of 4 spaces but found 8.
Line 48, column 1: Expected indentation of 0 spaces but found 4.
Line 49, column 1: Expected indentation of 4 spaces but found 8.
```

---

Should complain about tab indentation. (Unfortunately, the error message is not
entirely accurate)

```js
if (true) {
    console.log('foo');
	console.log('bar');
}
```
```output
Line 72, column 1: Expected indentation of 4 spaces but found 1 tab.
```
