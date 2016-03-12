Disallow omission of curly braces, even when they are valid in javascript.
Omitting curly braces can lead to subtle bugs. Especially when the next
developer comes around and needs to add just one more line to the `if` "block".

```js
if (true) { console.log('yay!'); }
```

```js
if (true) console.log('yay!');
```
```output
Line 10, column 1: Expected { after 'if' condition.
```

---

```js
if (false) {
    console.log('bar');
} else {
    console.log('foo');
}
```

```js
if (false) {
    console.log('bar');
} else
    console.log('foo');
```
```output
Line 29, column 3: Expected { after 'else'.
```

---

```js
for (var i = 0; i > 2; i++) { console.log(i); }
```

```js
for (var i = 0; i > 2; i++) console.log(i);
```
```output
Line 43, column 1: Expected { after 'for' condition.
```

---

```js
while (true) { console.log('foobar'); }
```

```js
while (true) console.log('foobar');
```
```output
Line 56, column 1: Expected { after 'while' condition.
```

---

```js
do {
    console.log('foobar');
} while (true);
```

```js
do console.log('foobar');
while (true);
```
```output
Line 71, column 1: Expected { after 'do'.
```

---
