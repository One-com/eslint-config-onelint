```js
/* eslint no-undef: 0 */
// Word unary operator "delete" is followed by a whitespace.
delete foo.bar;

// Word unary operator "new" is followed by a whitespace.
new Foo;

// Word unary operator "void" is followed by a whitespace.
void 0;

// Unary operator "++" is not followed by whitespace.
++foo;

// Unary operator "--" is not preceded by whitespace.
foo--;

// Unary operator "-" is not followed by whitespace.
-foo;

// Unary operator "+" is not followed by whitespace.
+'3';
```


```js
/* eslint no-undef: 0 */
typeof!foo;
void{foo: 0};
new[foo][0];
delete(foo.bar);
++ foo;
foo --;
- foo;
+ '3';
```
```output
Line 28, column 1: Unary word operator 'typeof' must be followed by whitespace.
Line 29, column 1: Unary word operator 'void' must be followed by whitespace.
Line 30, column 1: Unary word operator 'new' must be followed by whitespace.
Line 31, column 1: Unary word operator 'delete' must be followed by whitespace.
Line 32, column 1: Unexpected space after unary operator '++'.
Line 33, column 1: Unexpected space before unary operator '--'.
Line 34, column 1: Unexpected space after unary operator '-'.
Line 35, column 1: Unexpected space after unary operator '+'.
```
