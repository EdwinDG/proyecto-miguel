import { Router } from "express"
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator"
import validarCampos from "../middlewares/validar.js"
import helpersCliente from "../helpers/hp_cliente.js";


const router = new Router()

router.get('/cliente', httpCliente.getCliente);

router.get('/cliente/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpCliente.getClienteId);

router.post('/cliente/agregar', [
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "El nombre debe tener mas de 5 caracteres").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpCliente.postCliente);

router.put('/cliente/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("nombre", "Digite su nombre").isLength({ min: 5 }),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpCliente.putCliente);

router.delete('/cliente/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpCliente.deleteCliente);

router.put('inactivarCliente/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpCliente.putClienteInactivar)
router.put('activarCliente/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpCliente.putClienteActivar)

export default router
