Should complain if identifiers are not in camel case.

```js
/* eslint no-unused-vars: 0 */
var foo_bar = 'foo bar';
```
```output
Line 5, column 5: Identifier 'foo_bar' is not in camel case.
```

```js
/* eslint no-unused-vars: 0 */
var fooBar = 'foo bar';
```

Should not complain about underscores in the beginning of the identifier name:
```js
/* eslint no-unused-vars: 0 */
var _fooBar = 'foo bar';
```

Should not complain about uppercase identifiers:

```js
/* eslint no-unused-vars: 0 */
var FOOBAR = 'foo bar';
```

Do not check object properties for camel casing, as they might be required when
interfacing with external systems (fx postgres from node or an third party api).
```js
/* eslint no-unused-vars: 0 */
var obj = {
    snake_case_prop: 'foo bar'
};
```
