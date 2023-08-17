import { Router } from "express"
import httpHorario from "../controllers/horario.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"
import helpersHorario from "../helpers/hp_horario.js";

const router = new Router()

router.get('/horario',httpHorario.getHorario);

router.get('/horario/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpHorario.getHorarioId);

router.post('/agregar',[
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty(),
    validarCampos
],httpHorario.postHorario);

router.put('/horario/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("hora_partida", "Digite la hora de partida").not().isEmpty(),
    check("hora_llegada", "Digite la hora estimada de llegada").not().isEmpty(),
    check("fecha_partida", "Digite la fecha de llegada").not().isEmpty(),
    check("hora_llegada", "Digite la hora de llegada ").not().isEmpty(),
    validarCampos
], httpHorario.putHorario);

router.delete('/horario/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpHorario.deleteHorario);

router.put('inactivarHorario/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpHorario.putHorarioInactivar)
router.put('activarHorario/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpHorario.putHorarioActivar)

export default router