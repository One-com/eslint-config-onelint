Should require use of dot notation.

Should allow to put keywords in bracket notation instead.

The following should not cause problems:
```js
/* eslint no-unused-vars: 0 */
var obj = {};
var bar = 'foobar';
obj.foo = 'foobar';
obj[bar] = 'foobar';
```

The following is considered problems:

```js
/* eslint no-unused-vars: 0 */
var obj = {};

obj['bar'] = 'foo';
```
```output
Line 20, column 1: ["bar"] is better written in dot notation.
```

---

Should not consider promises a problem:

```js
/* eslint no-undef: 0 */
getPromise()
    .then(function () {
        console.log('result');
    })
    .catch(function () {
        console.log('err!');
    })
    .finally(function () {
        console.log('at last...');
    });
```

As a side effect of not writing the `.catch` as `['catch']` we also allow
writing other keywords as dot notation. This will cause problems if you need to
support ES3 runtimes, as reserved words are not allowed in dot notation.

```js
/* eslint no-unused-vars: 0 */
var obj = {};
obj.class = 'bar';
obj.function = 'bar';
obj.try = 'bar';
```
