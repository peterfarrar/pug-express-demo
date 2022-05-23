exports.mochaGlobalSetup = () => {
  this.server = require('../src/app')
  global.chai = require('chai')
  global.expect = global.chai.expect
  global.request = require('supertest')(this.server)
}

exports.mochaGlobalTeardown = () => {
  this.server.close()
  console.log('server stopped.')
}
