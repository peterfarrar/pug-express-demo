const express = require('express')
const menu = require('../../db/menu.json')

const router = express.Router()

const lunch = menu.meals.find(meal => meal.meal === 'Lunch')
const dinner = menu.meals.find(meal => meal.meal === 'Dinner')

router.get('/', (req, res) => {
  res.render('index', dinner)
})

router.get('/lunch', (req, res) => {
  res.render('index', lunch)
})

router.get('/dinner', (req, res) => {
  res.render('index', dinner)
})

module.exports = router