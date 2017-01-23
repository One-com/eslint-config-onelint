# onelint eslint configuration

[![Build Status](https://travis-ci.org/One-com/eslint-config-onelint.svg?branch=master)](https://travis-ci.org/One-com/eslint-config-onelint)

This sharable eslint config is derived from the style which the JavaScript
developers at One.com use for internal as well as open source projects.

If you write React code, consider including
[eslint-config-onelint-react](https://github.com/One-com/eslint-config-onelint-react)

## Supported Node.js versions

As of eslint version 3 node versions prior to 4.0.0 are no longer supported.
The [`v1`](https://github.com/One-com/eslint-config-onelint/tree/v1) branch
of this package still supports eslint v2.

Later branches require eslint 3.

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

### Turn off ES6 parser module

Code like the following will break in es6 parser mode, but work just fine in es5:

```js
loadingQueue.await(...)
```

It can be handled by setting the following options in `.eslintrc.js`:

```js
module.exports = {
    extends: [
        'onelint'
    ],
    env: {
        es6: false
    },
    parserOptions: null
};
```

It's not always that it causes problems, so I'll not make the default es5 now.
If it turns out to be a major problem, we could release an es5 version of this
package too, with the above configuration extended on top.

The above fix is also necessary when you're code will not work in mode.
ES6 modules are enabled in the parsing options, which implicitly enables strict
mode. That will cause, among other things, cause octals to be considered invalid:

```js
var someOctalValue = 0200;
```

## Configuration

Obviously, the goal is to deviate as little as possible from the presets given
in this configuration. But sometimes your projects may have global variables
that are specific to that particular project, or maybe large parts of legacy
code that you don't want to rewrite.

Because onelint is shipping as a sharable eslint configuration, you can extend
it by adding new rules, overwriting rules or defining new globals in the
`.eslintrc.js` just as you would, if you used eslint exclusively.

See [Configuring ESLint](http://eslint.org/docs/user-guide/configuring.html) in
the eslint docs.

## Editor Plugins

Setting up eslint integration in your editor is all that is needed. You can find
a guide most editor in the
[integrations](http://eslint.org/docs/user-guide/integrations) section of the
eslint user guide. Recommended settings for common editors can be found below.

### Atom

The Atom editor plugin is called linter-eslint and is built on the AtomLinter
framework. It is available directly in your editor, or in the
[package archives](https://atom.io/packages/linter-eslint) on atom.io.

### Vim

Eslint is supported out of the box in [Syntastic](https://github.com/scrooloose/syntastic).
Add this in your .vimrc to let Syntastic pick the right configuration for your project.
```
function SetSyntasticEsLint()
    let g:syntastic_javascript_checkers = ['eslint']
    let g:syntastic_javascript_eslint_exec = '/{{root of your project}}/node_modules/.bin/eslint'
endfunction

au BufRead,BufNewFile /home/dpi/Documents/professional-services/* call SetSyntasticEsLint()
```

### Sublime Text 3

- Install the [Package Control](https://packagecontrol.io/installation) package
  manager for sublime text, if it's not already installed.
- Install SublimeLinter through Package Control (Ctrl-P: Install Packages)
- Install [SublimeLinter-contrib-eslint](https://github.com/roadhump/SublimeLinter-eslint)
  through Package Control

(Probably works for Sublime Text 2 as well...)
