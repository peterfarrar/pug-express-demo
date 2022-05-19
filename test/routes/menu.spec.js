const app = require('../../src/app')
const menu = require('../../db/menu.json')

describe('menu.js', () => {
  let request
  before(() => {
    request = supertest(app)
  })
  
  after(() => {
    app.close()
  })

  it('return full menu when GET /menu is called', () => {
    return request
      .get('/menu')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.eql(menu)
      })
  })

  it('return the dinner menu when GET /menu/dinner is called', () => {
    return request
      .get('/menu/dinner')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.eql(menu.meals.filter(meal => meal.meal === 'Dinner'))
      })
  })

})
