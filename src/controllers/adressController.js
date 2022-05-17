
import { Adress } from "../models/Adress";

async function create(req, res) {
    try{
        const { idSalon } = req.params;
        if(!idSalon){
            return res.status(400).json({
                erros: ["idSalon is invalid."]
            })
        }
        const {rua, numero, cep, cidade, estado, pais} = req.body;
        let salaoFk = idSalon
        const adress = await Adress.create({rua, numero, cep, cidade, estado, pais, salaoFk});
        return res.status(200).json(adress)

    }catch(e) {
        return res.status(400).json(e)
    }
}

export { create }