import Conductor from "../models/conductor.js";

const helpersConductor = {
    existeHolderById: async (id, req) => {
        const existe = await Conductor.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.ConductorUpdate = existe
    },
}
export default helpersConductor