const app = require('../../src/app')
const fs = require('fs')

const renderedHtml = fs.readFileSync('./test/fixtures/index.html')
// const renderedHtml = fs.readFileSync('../fixtures/index.html')

describe('html.js', () => {
  let request
  before(() => {
    request = supertest(app)
  })

  after(() => {
    app.close()
  })

  it('return rendered page when GET / is called', () => {
    return request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.eql(renderedHtml)
      })
  })
})
