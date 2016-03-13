In JavaScript, it's possible to redeclare the same variable name using `var`.
This can lead to confusion as to where the variable is actually declared and
initialized.

```js
var a = 3;
var a = 10;
console.log(a);
```

```output
Line 7, column 5: 'a' is already defined
```
