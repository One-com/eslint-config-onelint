Anonymous functions must have spaces after the function keyword. Named functions
must not have spaces before the parenthesis.

```js
var foo = function() {};
foo();
```
```output
Line 5, column 19: Missing space before function parentheses.
```

```js
function foo () {}
foo();
```
```output
Line 13, column 13: Unexpected space before function parentheses.
```

```js
var foo = function () {};
foo();
```

```js
function foo() {}
foo();
```
