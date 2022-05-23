const app = require('../src/app')

before(() => {
  global.chai = require('chai')
  global.expect = global.chai.expect
  global.supertest = require('supertest')
  global.request = global.supertest(app)
})

after(() => {
  app.close()
})
