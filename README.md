# onelint eslint configuration

This sharable eslint config is derived from the style which the JavaScript
developers at One.com use for internal as well as open source projects.

## Usage

To start using the linter in a project start by installing eslint and this
module:

```
$ npm install --save-dev eslint eslint-config-onelint
```

Then add a eslint config file to your project, named `.eslintrc.js`:

```js
module.exports = {
    extends: [
        'onelint'
    ]
};
```

Now you can lint your files by running the following command in the root of your
project.

```
$ eslint .
```

... or if eslint is not on your path:

```
$ ./node_modules/.bin/eslint .
```

For convenience, you can add it as a script in package.json's scripts section,
to make it available as `npm run lint`.

## Configuration

Obviously, the goal is to derive as little as possible from the presets given in
this configuration. But sometimes your projects may have global variables that
are specific to that particular project, or maybe large parts of legacy code
that you don't want to rewrite.

Because onelint is shipping as a sharable eslint configuration, you can extend
it by adding new rules, overwriting rules or defining new globals in the
`.eslintrc.js` just as you would, if you used eslint exclusively.

See [Configuring ESLint](http://eslint.org/docs/user-guide/configuring.html) in
the eslint docs.