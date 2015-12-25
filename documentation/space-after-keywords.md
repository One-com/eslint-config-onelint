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
Line 12, column 3: Keyword "if" must be followed by whitespace.
```

```js
if (true) { console.log('space after keywords!'); }
else{ console.log('space after keywords!'); }
```
```output
Line 20, column 5: Keyword "else" must be followed by whitespace.
```

```js
for(var i = 0; i < 10; i++) { console.log('space after keywords!'); }
```
```output
Line 27, column 4: Keyword "for" must be followed by whitespace.
```

```js
while(true) { console.log('space after keywords!'); }
```
```output
Line 34, column 6: Keyword "while" must be followed by whitespace.
```

```js
do{ console.log('space after keywords!'); } while (true);
```
```output
Line 41, column 3: Keyword "do" must be followed by whitespace.
```

```js
switch(true) {}
```
```output
Line 48, column 7: Keyword "switch" must be followed by whitespace.
```

```js
try{
    console.log('space after keyword!');
} catch (e) {}
```
```output
Line 55, column 4: Keyword "try" must be followed by whitespace.
```

```js
try {
    console.log('space after keyword!');
} catch(e) {}
```
```output
Line 66, column 8: Keyword "catch" must be followed by whitespace.
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
Line 76, column 10: Keyword "finally" must be followed by whitespace.
```
