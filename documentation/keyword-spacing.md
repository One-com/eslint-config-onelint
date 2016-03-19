Require spaces after keywords. Like so:

```js
if (true) {
    console.log('yes!');
} else {
    console.log('nope!');
}
```

```js
if(true) { console.log('space after keywords!'); }
```
```output
Line 12, column 1: Expected space(s) after "if".
```

```js
if (true) {
    console.log('space after keywords!');
} else{ console.log('space after keywords!'); }
```
```output
Line 21, column 3: Expected space(s) after "else".
```

```js
for(var i = 0; i < 10; i++) { console.log('space after keywords!'); }
```
```output
Line 28, column 1: Expected space(s) after "for".
```

```js
while(true) { console.log('space after keywords!'); }
```
```output
Line 35, column 1: Expected space(s) after "while".
```

```js
do{ console.log('space after keywords!'); } while (true);
```
```output
Line 42, column 1: Expected space(s) after "do".
```

```js
switch(true) {}
```
```output
Line 49, column 1: Expected space(s) after "switch".
```

```js
try{
    console.log('space after keyword!');
} catch (e) {}
```
```output
Line 56, column 1: Expected space(s) after "try".
```

```js
try {
    console.log('space after keyword!');
} catch(e) {}
```
```output
Line 67, column 3: Expected space(s) after "catch".
```

```js
try {
    console.log('space after keyword!');
} catch (e) {
} finally{
    console.log('done');
}
```
```output
Line 77, column 3: Expected space(s) after "finally".
```

```js
var str = 'foo';
switch (str) {
case'foo':
    console.log('foo!');
    break;
default:
    console.log('bar!');
}
```
```output
Line 88, column 1: Expected space(s) after "case".
```

```js
function fooArray(foo) {
    return[foo];
}
fooArray('foo');
```
```output
Line 101, column 5: Expected space(s) after "return".
```
