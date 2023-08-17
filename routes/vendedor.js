import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"
import { validarJWT } from "../middlewares/validar-jwt.js";
import helpersVendedor from "../helpers/hp_vendedor.js";

const router=new Router()

router.get('/vendedor',httpVendedor.getVendedor);

router.get('/vendedor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpVendedor.getVendedorId);

router.post('/agregar',[
    check("cedula","Digite su cedula").not().isEmpty(),
    check("nombre","Digite su nombre").not().isEmpty(),
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
    check("telefono","Digite su telefono").not().isEmpty(),
    validarCampos
],httpVendedor.postVendedor);

router.put('/vendedor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("nombre","Digite su nombre").not().isEmpty(),
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
    check("telefono","Digite su telefono").not().isEmpty(),
    validarCampos,
    validarJWT
], httpVendedor.putVendedor);

router.post('/vendedor_datos',[
    check("cuenta","Digite su cuenta").not().isEmpty(),
    check("clave","Digite su clave").not().isEmpty(),
],httpVendedor.login);

router.delete('/vendedor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos,
], httpVendedor.deleteVendedor);

router.put('inactivarVendedor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos,
    validarJWT
],httpVendedor.putVendedorInactivar)
router.put('activarVendedor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos,
    validarJWT
],httpVendedor.putVendedorActivar)

export default router
