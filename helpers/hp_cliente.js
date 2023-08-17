import Cliente from "../models/cliente.js";

const helpersCliente = {
    existeHolderById: async (id, req) => {
        const existe = await Cliente.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.ClienteUpdate = existe
    },
}
export default helpersCliente