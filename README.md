[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-filter.svg)](https://npmjs.org/package/@dizmo/functions-filter)
[![Build Status](https://travis-ci.org/dizmo/functions-filter.svg?branch=master)](https://travis-ci.org/dizmo/functions-filter)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-filter/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-filter?branch=master)

# @dizmo/functions-filter

Library module.

## Usage

### Installation

```sh
npm install @dizmo/functions-filter --save
```

### Require

```javascript
const lib = require('@dizmo/functions-filter');
```

### Examples

```javascript
...
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Documentation

```sh
npm run docs
```

## Publication

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2020 [Hasan Karahan](https://github.com/hsk81)
