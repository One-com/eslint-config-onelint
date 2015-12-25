Using javascript: URLs is considered by some as a form of eval. Code passed in
javascript: URLs has to be parsed and evaluated by the browser in the same way
that eval is processed.

```js
var location = {};
location.href = 'javascript:void(0)';
```

```output
Line 7, column 17: Script URL is a form of eval.
```
