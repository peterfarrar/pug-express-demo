const { after } = require('mocha')

beforeEach(() => {
  global.chai = require('chai')
  global.expect = global.chai.expect
  global.supertest = require('supertest')
})

/*
afterEach(() => {
  // reset anything you need to reset
})

after(() => {
  // reset after testing is complete
})
*/