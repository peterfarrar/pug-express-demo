const express = require('express')
const menu = require('../../db/menu.json')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(menu)
})

router.get('/lunch', (req, res) => {
  res.json(menu.meals.find(meal => meal.meal === 'Lunch'))
})

router.get('/dinner', (req, res) => {
  res.json(menu.meals.find(meal => meal.meal === 'Dinner'))
})

module.exports = router