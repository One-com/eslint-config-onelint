## Change Log

### v1

Breaking changes from the jscs/jshint setup we migrated from:

- Indentation of `case` keywords in `switch` blocks weren't enforced with the
  old setup. It used to enforce no extra indentation of `case`, but that
  regressed around the time jscs was split out of jshint.
