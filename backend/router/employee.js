const express = require('express')
const router = express.Router()
const {
  auth,
  addEmployee,
  getEmployeeTest,
  getAllEmployee,
  getEmployeeById
} = require('../controller/employeeController')

// users routing
router.post('/', addEmployee)

router.get('/test', getEmployeeTest)

router.post('/auth', auth)

router.get('/', getAllEmployee)

router.get('/:employeeId', getEmployeeById)


module.exports = router