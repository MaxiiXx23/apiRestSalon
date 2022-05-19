
import { Adress } from "../models/Adress";

async function create(req, res) {
    try {
        const { idSalon } = req.params;
        if (!idSalon) {
            return res.status(400).json({
                erros: ["idSalon is invalid."]
            })
        }
        const { rua, numero, cep, cidade, estado, pais } = req.body;
        let salaoFk = idSalon
        const adress = await Adress.create({ rua, numero, cep, cidade, estado, pais, salaoFk });
        return res.status(200).json(adress)

    } catch (e) {
        return res.status(400).json({
            erros: e.erros.map(error => error.massage)
        })
    }
}

async function update(req, res) {
    try {
        const { idSalon } = req.params;
        if (!idSalon) {
            return res.status(400).json({
                errors: ["idSalon is invalid."]
            })
        }
        const adress = await Adress.findByPk(idSalon);
        if (!adress) {
            return res.status(400).json({
                errros: ["Adress is not exists."]
            })
        }
        const adressUpdated = await adress.update(req.body);
        return res.status(200).json(adressUpdated);

    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.massage)
        })
    }
}

async function deleteAdress(req, res) {
    try {
        const { idAdress } = req.params;
        if (!idAdress) {
            return res.status(400).json({
                errors: ['idAdress is invalid.']
            })
        }
        const adress = await Adress.findByPk(idAdress);
        if (!adress) {
            return res.status(400).json({
                errors: ["Adress is not exists."]
            })
        }
        adress.destroy();
        return res.status(200).json({
            msg: 'Adress deleted.'
        })

    } catch (e) {
        return res.status(400).json(e)
    }
}


export { create, update, deleteAdress }