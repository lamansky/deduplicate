'use strict'

const assert = require('assert')
const deduplicate = require('.')

describe('deduplicate', function () {
  it('removes duplicate array elements', function () {
    assert.strictEqual(JSON.stringify(deduplicate([1, 2, 1, 2])), JSON.stringify([1, 2]))
  })

  it('removes duplicate string characters', function () {
    assert.strictEqual(deduplicate('test'), 'tes')
  })
})
