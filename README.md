[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-filter.svg)](https://npmjs.org/package/@dizmo/functions-filter)
[![Build Status](https://travis-ci.com/dizmo/functions-filter.svg?branch=master)](https://travis-ci.com/dizmo/functions-filter)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-filter/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-filter?branch=master)

# @dizmo/functions-filter

Asynchronously filters an array of items: The `Array.prototype.filter` function does *not* allow to filter an array using asynchronous predicates. However by applying the `filter` function, it becomes possible to do so.

## Usage

### Installation

```sh
npm install @dizmo/functions-filter --save
```

### Require

```javascript
const { filter } = require('@dizmo/functions-filter');
```

### Examples

```typescript
import { filter } from "@dizmo/functions-filter";
```

```typescript
const even_numbers = await filter([0,1,2,3,4], (n) => new Promise(
    (resolve) => setTimeout(() => resolve(n % 2 === 0))
));
```

```typescript
const odd_numbers = await filter([0,1,2,3,4], (n) => new Promise(
    (resolve) => setTimeout(() => resolve(n % 2 === 1))
));
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

 © 2020 [dizmo AG](http://dizmo.com/), Switzerland
