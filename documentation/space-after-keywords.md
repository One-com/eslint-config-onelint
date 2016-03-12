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
Line 20, column 5: Missing space before opening brace.
```

```js
for(var i = 0; i < 10; i++) { console.log('space after keywords!'); }
```
```output
Line 28, column 4: Keyword "for" must be followed by whitespace.
```

```js
while(true) { console.log('space after keywords!'); }
```
```output
Line 35, column 6: Keyword "while" must be followed by whitespace.
```

```js
do{ console.log('space after keywords!'); } while (true);
```
```output
Line 42, column 3: Keyword "do" must be followed by whitespace.
Line 42, column 3: Missing space before opening brace.
```

```js
switch(true) {}
```
```output
Line 50, column 7: Keyword "switch" must be followed by whitespace.
```

```js
try{
    console.log('space after keyword!');
} catch (e) {}
```
```output
Line 57, column 4: Keyword "try" must be followed by whitespace.
Line 57, column 4: Missing space before opening brace.
```

```js
try {
    console.log('space after keyword!');
} catch(e) {}
```
```output
Line 69, column 8: Keyword "catch" must be followed by whitespace.
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
Line 79, column 10: Keyword "finally" must be followed by whitespace.
Line 79, column 10: Missing space before opening brace.
```
