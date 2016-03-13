Blocks should be braced like this:

```js
if (true) {
    console.log('foo');
} else {
    console.log('bar');
}
```

NOT like the following examples:

```js
if (true) {
    console.log('foo');
}
else {
    console.log('bar');
}
```
```output
Line 17, column 6: Closing curly brace does not appear on the same line as the subsequent block.
```

```js
if (true)
{
    console.log('foo');
}
else
{
    console.log('bar');
}
```
```output
Line 26, column 1: Opening curly brace does not appear on the same line as controlling statement.
Line 26, column 1: Opening curly brace does not appear on the same line as controlling statement.
Line 31, column 1: Closing curly brace does not appear on the same line as the subsequent block.
```

## Allow single line blocks

```js
console.log(function () { return 'bar'; });
```
