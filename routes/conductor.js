import { Router } from "express"
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"
import helpersConductor from "../helpers/hp_conductor.js";

const router = new Router()

router.get('/conductor', httpConductor.getConductor);

router.get('/conductor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpConductor.getConductorId);

router.post('/agregar',[
    check("cedula", "Digite su cedula").not().isEmpty(),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("id_bus", "Digite el id del bus").not().isEmpty(),
    check("id_bus", "Digite el id del bus").isMongoId(),
    check("experiencia", "Digite sus años de experiencia").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
],httpConductor.postConductor);

router.put('/conductor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("nombre", "Digite su nombre").not().isEmpty(),
    check("id_bus", "Digite el id del bus").not().isEmpty(),
    check("experiencia", "Digite sus años de experiencia").not().isEmpty(),
    check("telefono", "Digite su telefono").not().isEmpty(),
    validarCampos
], httpConductor.putConductor);

router.delete('/conductor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpConductor.deleteConductor);
router.put('inactivarConductor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpConductor.putConductorInactivar)
router.put('activarConductor/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpConductor.putConductorActivar)

export default router