'use strict'

var semver = require('semver')
var resolves = require('semver-resolves')
var sortCompartors = require('sort-semver-comparators')
var last = require('array-last')

exports.range = function isRangeBounded (range) {
  return new semver.Range(range).set.every(areComparatorsBounded)
}

exports.comparators = areComparatorsBounded

function areComparatorsBounded (comparators) {
  if (!resolves.comparators(comparators)) return false
  comparators = sortCompartors(comparators)
  var final = last(comparators)
  return !~final.operator.indexOf('>')
}
