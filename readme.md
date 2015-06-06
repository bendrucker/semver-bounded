# semver-bounded [![Build Status](https://travis-ci.org/bendrucker/semver-bounded.svg?branch=master)](https://travis-ci.org/bendrucker/semver-bounded)

> Determine whether a semver range is bounded

## Install

```
$ npm install --save semver-bounded
```


## Usage

```js
var isBounded = require('semver-bounded')

isBounded('>2 <4') // => true
isBounded('>4') // => false
```

## API

#### `isBounded(range)` -> `boolean`

##### range

*Required*  
Type: `string`

The semver range to test.

## License

MIT © [Ben Drucker](http://bendrucker.me)
