const app = require('../src/app')

describe('api.js', () => {
  it('return pong when GET /ping is called', () => {
    return request
      .get('/ping')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).to.eql('pong')
      })
  })
})
