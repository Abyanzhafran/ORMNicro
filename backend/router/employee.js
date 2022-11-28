const express = require('express')
const router = express.Router()
const {
  auth,
  addEmployee,
  getEmployeeTest,
  getAllEmployee,
  getEmployeeById,
  deleteEmployeeById
} = require('../controller/employeeController')

// employees routing
router.post('/', addEmployee)

router.get('/test', getEmployeeTest)

router.post('/auth', auth)

router.get('/', getAllEmployee)

router.get('/:employeeId', getEmployeeById)

router.delete('/:employeeId', deleteEmployeeById)


module.exports = router