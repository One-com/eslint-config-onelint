Enforce the use of `that` as the identifier name when capturing `this`.

```js
/* eslint no-undef: 0 */
var that = this;
foobar(function () {
    console.log(that.foo);
});
```

```js
/* eslint no-undef: 0 */
var self = this;
foobar(function () {
    console.log(self.foo);
});
```
```output
Line 13, column 5: Unexpected alias 'self' for 'this'.
```
