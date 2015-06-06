'use strict'

var test = require('tape')
var isBounded = require('./')

test(function (t) {
  t.ok(isBounded('<2'))
  t.ok(isBounded('<5 >2'))
  t.notOk(isBounded('>2'))
  t.notOk(isBounded('<2 || >2'))
  t.end()
})
