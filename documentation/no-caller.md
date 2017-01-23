You should avoid using `arguments.caller` and `arguments.callee`.

```js
/* eslint no-unused-vars: 0 */
function foo() {
    var callee = arguments.callee;
    var caller = arguments.caller;
}
foo();
```
```output
Line 6, column 18: Avoid arguments.callee.
Line 7, column 18: Avoid arguments.caller.
```
