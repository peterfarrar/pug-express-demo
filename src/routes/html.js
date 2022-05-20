const express = require('express')
const menu = require('../../db/menu.json')

const router = express.Router()

const lunch = menu.meals.filter(meal => meal.meal === 'Lunch')[0]
const dinner = menu.meals.filter(meal => meal.meal === 'Dinner')[0]

router.get('/', (req, res) => {
  res.render('index', dinner)
})

module.exports = router