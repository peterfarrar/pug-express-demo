const fs = require('fs')

const renderedHtml = fs.readFileSync('./test/fixtures/index.html').toString()
const renderedLunchHtml = fs.readFileSync('./test/fixtures/index-lunch.html').toString()
const renderedDinnerHtml = fs.readFileSync('./test/fixtures/index-dinner.html').toString()

describe('html.js', () => {
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

  it('return rendered page when GET /lunch is called', () => {
    return request
      .get('/lunch')
      .expect('Content-Type', /html/)
      .expect(200)
      .then((response) => {
        const actual = response.text.toString().replace(/\s+/g, '')
        const expected = renderedLunchHtml.replace(/\s+/g, '')
        expect(actual).to.eq(expected)
      })
  })

  it('return rendered page when GET /dinner is called', () => {
    return request
      .get('/dinner')
      .expect('Content-Type', /html/)
      .expect(200)
      .then((response) => {
        const actual = response.text.toString().replace(/\s+/g, '')
        const expected = renderedDinnerHtml.replace(/\s+/g, '')
        expect(actual).to.eq(expected)
      })
  })
})
