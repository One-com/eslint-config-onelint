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
Line 13, column 3: Expected indentation of 4 space characters but found 2.
```

```js
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
Line 40, column 5: Expected indentation of 0 space characters but found 4.
Line 41, column 9: Expected indentation of 4 space characters but found 8.
Line 42, column 9: Expected indentation of 4 space characters but found 8.
Line 43, column 5: Expected indentation of 0 space characters but found 4.
Line 44, column 9: Expected indentation of 4 space characters but found 8.
Line 45, column 9: Expected indentation of 4 space characters but found 8.
Line 46, column 5: Expected indentation of 0 space characters but found 4.
Line 47, column 9: Expected indentation of 4 space characters but found 8.
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
Line 70, column 2: Expected indentation of 4 space characters but found 0.
```
