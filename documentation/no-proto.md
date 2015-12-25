`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn't be
used in the code. Use `getPrototypeOf` method instead.

```js
var obj = {};
var a = obj.__proto__;

console.log(a);
```

```output
Line 6, column 9: The '__proto__' property is deprecated.
```
