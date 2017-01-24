Onelint requires you to use quote strings with single-quotes.

```js
/* eslint no-unused-vars: 0 */
var single = 'single';
```

Using double quotes will emit an error.

```js
/* eslint no-unused-vars: 0 */
var foo = "bar";
```
```output
Line 12, column 11: Strings must use singlequote.
```

However, double quotes are allowed to avoid escaping single quotes.

```js
/* eslint no-unused-vars: 0 */
var double = "a string containing 'single' quotes";
```

Template strings are allowed when they save you from escaping:

```js
/* eslint no-unused-vars: 0 */
var backtick = `this linebreak \n does not need to be escaped!`;
```

Using template strings when not needed is not allowed.

```js
/* eslint no-unused-vars: 0 */
var foo = `unnecessary template string`;
```
```output
Line 36, column 11: Strings must use singlequote.
```

Template strings are allowed when using expressions:

```js
/* eslint no-unused-vars: 0 */
var name = 'World';
var greeting = `Hello ${name}!`;
```

Template strings cannot be used inplace of double quotes to avoid
escaping single quotes

```js
/* eslint no-unused-vars: 0 */
var backtick = `a string containing 'single' quotes`;
```
```output
Line 55, column 16: Strings must use singlequote.
```
