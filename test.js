'use strict'

var test = require('tape')
var semver = require('semver')
var isBounded = require('./')

test(function (t) {
  t.ok(isBounded.range('<2'))
  t.ok(isBounded.range('<5 >2'))
  t.notOk(isBounded.range('>2'))
  t.notOk(isBounded.range('<2 || >2'))

  t.notOk(isBounded.range('>=2 <2'))
  t.notOk(isBounded.range('>2 <2'))

  t.ok(isBounded.comparators([new semver.Comparator('<2.0.0')]))
  t.notOk(isBounded.comparators([new semver.Comparator('>2.0.0')]))

  t.end()
})
