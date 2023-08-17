import Vendedor from "../models/vendedor.js";

const helpersVendedor = {
    existeHolderById: async (id, req) => {
        const existe = await Vendedor.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.VendedorUpdate = existe
    },
}
export default helpersVendedor