'use strict'

var semver = require('semver')
var sortCompartors = require('sort-semver-comparators')
var last = require('array-last')

module.exports = function isRangeBounded (range) {
  return new semver.Range(range).set
    .every(function (comparators) {
      comparators = sortCompartors(comparators)
      var final = last(comparators)
      return !~final.operator.indexOf('>')
    })
}
