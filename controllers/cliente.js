import Cliente from "../models/cliente.js";

const httpCliente = {

    getCliente: async (req, res) => {
        try {
            const cliente = await Cliente.find()
            res.json({ cliente })

        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getClienteId: async (req, res) => {
        const { id } = req.params
        try {
            const cliente = await Cliente.findById({id})
            res.json({ cliente })

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    postCliente: async (req, res) => {
        try {
            const { cedula, nombre, telefono } = req.body
            const cliente = new Cliente({ cedula, nombre, telefono })
            await cliente.save()

            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }


    },
    putCliente: async (req, res) => {
        // try {
        //     const {cedula}=req.params
        //     const {nombre,telefono}=req.body
        //     const cliente_editar = Cliente.find(cedula)
        //     const cliente=await 
        //     Cliente.findByIdAndUpdate(cliente_editar._id,{nombre,telefono},{new:true});
        //     res.json({cliente})
        // } catch (error) {
        //     res.status(400).json({error})
        // }
        try {
            const { id } = req.params
            const { nombre, telefono } = req.body
            const cliente = await
                Cliente.findByIdAndUpdate(id, { nombre, telefono }, { new: true });
            res.json({cliente})
        } catch (error) {
            res.status(400).json({error})
        }

    },
    deleteCliente: async (req,res) => {
        try {
            const { id } = req.params
            const cliente = await Cliente.findByIdAndDelete(id)
            res.json(cliente + `Cliente eliminado`)
        } catch (error) {
            res.status(400).json({error})
        }
    },
    putClienteInactivar: async (req,res)=>{
        try {
            const {id}=req.params
            const cliente=await Cliente.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({cliente})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putClienteActivar: async (req,res)=>{
        try {
            const {id}=req.params
            const cliente=await Cliente.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({cliente})
        } catch (error) {
            res.status(400).json({error})
        }
    }

}

export default httpCliente