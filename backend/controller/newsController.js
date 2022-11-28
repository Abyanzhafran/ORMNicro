const { v4: uuidv4 } = require('uuid');
const db = require('../database')

const getNewsTest = (req, res) => {
  res.send('news test')
}

const addNews = (req, res) => {
  const {
    title,
    content,
  } = req.body

  const newsId = uuidv4()
  const createdAt = new Date().toISOString()

  const newNews = {
    newsId,
    title,
    content,
    createdAt
  }

  const getObjVal = Object.values(newNews)

  let query = "INSERT INTO tbl_news (newsId, title, content, createdAt) VALUES (?, ?, ?, ?)"
  db.query(query, getObjVal, (err) => {
    if (err) {
      res.status(201).send({ message: err.sqlMessage })
    }
    res.status(200)
    res.send({
      status: 'success',
      message: 'Employee added successfully',
      data: {
        newsId: newNews.newsId
      }
    })
  })
}

const getAllNews = (req, res) => {
  let query = "SELECT * FROM tbl_news"
  db.query(query, (err, result) => {
    if (err) {
      res.status(404).send({ message: err.sqlMessage })
      throw err
    }
    res.status(200).send({
      status: 'success',
      news: result
    })
  })
}

const getNewsById = (req, res) => {
  const { newsId } = req.params

  let query = "SELECT * FROM tbl_news WHERE newsId = ?"
  db.query(query, [newsId], (err, result) => {
    if (result.length == 0) {
      res.status(404).send({
        status: 'fail',
        message: err.sqlMessage
      })
    } else if (!err && result.length !== 0) {
      res.status(200).send(result[0])
    }
  })
}

const deleteNewsById = (req, res) => {
  const { newsId } = req.params

  let query = "DELETE FROM tbl_news WHERE newsId = ?"
  db.query(query, [newsId], (err, result) => {
    if (err) {
      res.status(404).send({
        status: 'fail',
        message: err.sqlMessage
      })
    }
    res.status(200).send({
      status: 'success',
      message: 'News successfully deleted'
    })
  })
}


module.exports = {
  getNewsTest,
  addNews,
  getAllNews,
  getNewsById,
  deleteNewsById
}