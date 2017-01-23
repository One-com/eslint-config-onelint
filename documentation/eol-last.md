Any file must have a new line at the end of it.

```js:no-eol
console.log('foobar');

```

```js:no-eol
console.log('foobar');
```
```output
Line 9, column 23: Newline required at end of file but not found.
```

---

These test cases use `js:no-eol` type, and is hence not syntax highlighted, and
will also not automatically have a new line at the end of the snippet. This is
handled in the file `test/util/md2js.js`.
