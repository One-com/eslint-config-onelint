Errors when variables are used outside of the block in which they were defined.

```js
function doSomething() {
    if (true) {
        var build = true;
    }

    console.log(build);
}

doSomething();
```

```output
Line 9, column 17: "build" used outside of binding context.
```
