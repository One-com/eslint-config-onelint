Disallow use of padding spaces in parentheses.

```js
function foo(foo) {
    console.log('foo', foo);
}
foo('bar');
```

The following example is invalid:

```js
function foo( foo ) {
    console.log( 'foo', foo);
}
foo('bar' );
```
```output
Line 13, column 13: There should be no spaces inside this paren.
Line 13, column 19: There should be no spaces inside this paren.
Line 14, column 16: There should be no spaces inside this paren.
Line 16, column 11: There should be no spaces inside this paren.
```
