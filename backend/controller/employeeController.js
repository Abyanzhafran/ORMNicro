const { v4: uuidv4 } = require('uuid');
const db = require('../database')

const getEmployeeTest = (req, res) => {
  res.send('comment test')
}

const auth = (req, res) => {
  const { username, password } = req.body

  let query = "SELECT id, username, password FROM tbl_employee WHERE username = ? AND password = ?"
  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(404).send({
        status: 'fail',
        message: err.sqlMessage
      })
    }
    res.status(200).send({
      status: 'success',
      loginResult: result[0].id
    })
  })
}

const addEmployee = (req, res) => {
  const {
    username,
    password,
  } = req.body

  const employeeId = uuidv4()

  const newEmployee = {
    employeeId,
    username,
    password
  }

  const getObjVal = Object.values(newEmployee)

  let query = "INSERT INTO tbl_employee (employeeId, username, password) VALUES (?, ?, ?)"
  db.query(query, getObjVal, (err) => {
    if (err) {
      res.status(201).send({ message: err.sqlMessage })
    }
    res.status(200)
    res.send({
      status: 'success',
      message: 'Employee added successfully',
      data: {
        employeeId: newEmployee.employeeId
      }
    })
  })
}

const getAllEmployee = (req, res) => {
  let query = "SELECT * FROM tbl_employee"
  db.query(query, (err, result) => {
    if (err) {
      res.status(404).send({ message: err.sqlMessage })
      throw err
    }
    res.status(200).send({
      status: 'success',
      comments: result
    })
  })
}


const getEmployeeById = (req, res) => {
  const { employeeId } = req.params

  let query = "SELECT * FROM tbl_employee WHERE employeeId = ?"
  db.query(query, [employeeId], (err, result) => {
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

module.exports = {
  auth,
  getEmployeeTest,
  addEmployee,
  getAllEmployee,
  getEmployeeById
}