Require spaces before opening curly braces.

## Functions

```js
var foo = function () {};
foo();
```

```js
var foo = function (){};
foo();
```
```output
Line 11, column 22: Missing space before opening brace.
```

## If statements

```js
if (true) {}
```

```js
if (true){}
```
```output
Line 25, column 10: Missing space before opening brace.
```
