Onelint requires you to use quote strings with single-quotes. However,
backticks are allowed for template strings and double-quotes are allowed as long
as the string contains a quote that would have to be escaped.

```js
/* eslint no-unused-vars: 0 */
var single = 'single';
var double = "a string containing 'single' quotes";
var backtick = `backtick\n`;
```

Using double quotes will emit an error.

```js
/* eslint no-unused-vars: 0 */
var foo = "foo";
var bar = "";
```

```output
Line 16, column 11: Strings must use singlequote.
Line 17, column 11: Strings must use singlequote.
```
