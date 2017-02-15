'use strict'

module.exports = function deduplicate (items) {
  const unique = Array.from(new Set(items))
  return typeof items === 'string' ? unique.join('') : unique
}
