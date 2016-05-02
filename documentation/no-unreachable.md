There should be no code statements after statements that unconditionally exit
a block of code i.e. `return`, `throw`, `break`, or `continue` statements.

```js
(function correct() {
    return bar;
    var bar;
})();
```

```js
(function incorrect() {
    var bar;
    return bar;
    bar = 3;
})();
```
```output
Line 15, column 5: Unreachable code.
```
