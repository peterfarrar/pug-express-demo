// const request = require("supertest");
const app = require('../src/app')

after(() => {
  app.close()
})

describe('api.js', () => {
  let request
  beforeEach(() => {
    request = supertest(app)
  })

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
