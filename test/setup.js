const app = require('../src/app')

exports.mochaHooks = {
  beforeAll: [(done) => {
    global.chai = require('chai')
    global.expect = global.chai.expect
    global.supertest = require('supertest')
    global.request = global.supertest(app)
    done()
  }],
  afterAll: [(done) => {
    app.close()
    done()
  }]
}