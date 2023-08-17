import { Router } from "express"
import httpTicket from "../controllers/ticket.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"

const router=new Router()

router.get('/ticket', httpTicket.getTicket);

router.get('/ticket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.getTicketId);

router.get('/tickets',[
    check("fechaInicio", "Fecha inicio").not().isEmpty(),
    check("fechaFin", "Fecha fin").not().isEmpty(),
    validarCampos
], httpTicket.getTicketsPorFechas); // Nueva ruta para listar tickets en un rango de fechas

router.get('/tickets/vendedor',[
    check("vendedorId", "Digite el vendedor").not().isEmpty(),
    validarCampos
], httpTicket.getTicketsPorVendedor); // Nueva ruta para listar tickets vendidos por vendedor

router.get('/tickets/ganancia',[
    check("fechaInicio", "Fecha inicio").not().isEmpty(),
    check("fechaFin", "Fecha fin").not().isEmpty(),
    validarCampos
], httpTicket.getTotalGananciaPorFechas); // Nueva ruta para calcular la ganancia total

router.get('/tickets/cliente', [
    check("clienteId", "Digite el ID del cliente").not().isEmpty(),
    validarCampos
], httpTicket.getTicketsPorCliente); // Nueva ruta para listar tickets comprados por cliente

router.get('/tickets/rutas', [
    check("busId", "Digite el ID del bus").not().isEmpty(),
    validarCampos
], httpTicket.getRutasPorBus);

router.get('/tickets/ganancia-ruta', [
    check("rutaId", "Digite el ID de la ruta").not().isEmpty(),
    check("fechaInicio", "Fecha inicio").not().isEmpty(),
    check("fechaFin", "Fecha fin").not().isEmpty(),
    validarCampos,
], httpTicket.getGananciaPorRutaYFechas);


router.post('/agregar',[
    check("vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("cliente_id", "Digite el id del cliente").isMongoId(),
    check("ruta_id", "Digite el id de la ruta").isMongoId(),
    check("bus_id", "Digite el id del bus").isMongoId(),
    check("fechahora_venta","vacio").isISO8601().toDate(),
    validarCampos
],httpTicket.postTicket);

router.delete('/ticket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos,
], httpTicket.deleteTicket);

router.put('inactivarTicket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.putTicketInactivar)
router.put('activarTicket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.putTicketActivar)

export default router