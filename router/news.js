const express = require('express')
const router = express.Router()
const {
  getNewsTest,
  addNews,
  getAllNews,
  getNewsById,
  deleteNewsById
} = require('../controller/newsController')

router.get('/test', getNewsTest)

router.post('/', addNews)

router.get('/', getAllNews)

router.get('/:newsId', getNewsById)

router.delete('/:newsId', deleteNewsById)

module.exports = router