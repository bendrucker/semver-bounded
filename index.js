'use strict'

var semver = require('semver')
var sortCompartors = require('sort-semver-comparators')
var last = require('array-last')

exports.range = function isRangeBounded (range) {
  return new semver.Range(range).set.every(areComparatorsBounded)
}

exports.comparators = areComparatorsBounded

function areComparatorsBounded (comparators) {
  comparators = sortCompartors(comparators)
  var final = last(comparators)
  return !~final.operator.indexOf('>')
}
