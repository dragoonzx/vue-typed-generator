/* eslint-disable no-undef */
'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-vue-typed-generator:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ 'someAnswer': true })
  })

  it('creates files', () => {
    assert.file(['dummyfile.txt'])
  })

  it('creates typed vue component', () => {
    assert.file(['TypedComponent.vue'])
  })
})
