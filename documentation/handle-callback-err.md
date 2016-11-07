You must handle err arguments in callbacks.

```js
function handleCallback() {}

handleCallback(function (err, data) {
    // err not handled
});
```

```output
Line 6, column 16: Expected error to be handled.
```

The following are examples of correct behavior.

```js
function handleCallback() {}

handleCallback(function loadData(err, data) {
    if (err) {
        console.log(err.stack);
    }
}
);

handleCallback(function ignoreError(err) {
    if (err) {}
});
```

It will work with [passerror](https://www.npmjs.com/package/passerror):

```js
var passError = require('passerror');
var fs = require('fs');

function errHandler() {}

fs.readFile('/foo.txt', passError(errHandler, function (data) {
    console.log(data);
}));
```
