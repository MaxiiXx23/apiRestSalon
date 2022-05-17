import { Endereco } from "../models/Endereco";

async function create(req, res) {
    try{
        return res.status(200).json({
            ok : 'ok'
        })
    }catch(e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.massage)
        })
    }
}

export { create }