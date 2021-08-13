const  { Router } = require('express')
const router = Router()
const EmpleadoCtrl = require('../controller/Empleado.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificartoken, EmpleadoCtrl.crear)
router.get('/listaempleados', Auth.verificartoken, EmpleadoCtrl.listar)
router.get('/listar/:id', Auth.verificartoken, EmpleadoCtrl.listarId)
router.get('/listarempleadosjefe/:id', Auth.verificartoken, EmpleadoCtrl.empleadosDeUnJefe)
router.delete('/eliminar/:id', Auth.verificartoken, EmpleadoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificartoken, EmpleadoCtrl.actualizar)
router.get('/buscar/:nombres/:id', Auth.verificartoken, EmpleadoCtrl.buscarempleado)

module.exports = router