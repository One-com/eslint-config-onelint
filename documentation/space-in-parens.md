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
Line 13, column 14: There should be no spaces inside this paren.
Line 13, column 20: There should be no spaces inside this paren.
Line 14, column 17: There should be no spaces inside this paren.
Line 16, column 12: There should be no spaces inside this paren.
```
