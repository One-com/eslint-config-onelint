You should avoid using `arguments.caller` and `arguments.callee`.

```js
/* eslint no-unused-vars: 0 */
function foo() {
    var calleer = arguments.callee;
    calleer += arguments.caller;
}
foo();
```
```output
Line 6, column 19: Avoid arguments.callee.
Line 7, column 16: Avoid arguments.caller.
```
