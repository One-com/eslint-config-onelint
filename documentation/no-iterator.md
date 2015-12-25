The __iterator__ property was a SpiderMonkey extension to JavaScript that could
be used to create custom iterators that are compatible with JavaScript's for in
and for each constructs. However, this property is now obsolete, so it should
not be used.


```js
var foo = {};
foo.__iterator__ = function () {};
console.log(foo);
```

```output
Line 9, column 1: Reserved name '__iterator__'.
```
