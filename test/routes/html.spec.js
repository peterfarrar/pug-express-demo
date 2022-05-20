const fs = require('fs')
const app = require('../../src/app')

const renderedHtml = fs.readFileSync('./test/fixtures/index.html').toString()

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
        const actual = response.text.toString().replace(/\s+/g, '')
        const expected = renderedHtml.replace(/\s+/g, '')
        expect(actual).to.eq(expected)
      })
  })
})
