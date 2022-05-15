import { Salon } from '../models/Salon';


async function profile(req, res) {
    try{
        const { idSalon } = req.params;
        if(!idSalon) {
            return res.status(400).json({
                errros:['Parameter idSalon not found.']
            })
        }
        const salon = await Salon.findByPk(idSalon,{
            attributes:['id', 'nome', 'fotoPerfil', 'banner', 'avaliacao']
        });
        if(!salon){
            return res.status(400).json({
                errors:['Salon not exists.']
            })
        }

        return res.status(200).json(salon)
    }catch(e) {
        return res.status(400).json({
            errors: e.errors.map( error => error.massage)
        })
    }
}





async function update(req,res) {
    try{
        const { idSalon } = req.params;
        if(!idSalon) {
            return res.status(400).json({
                errors: ['Parameter idSalon not found.']
            })
        }
        const salon = await Salon.findByPk(idSalon);
        if(!salon){
            return res.status(400).json({
                errors:['Salon not found.']
            })
        }
        const newSalon = await salon.update(req.body);
        return res.status(200).json(newSalon)

    }catch (e){
        return res.status(400).json({
            errors: e.errors.map(error => error.message)
        })
    }

}


export {profile, update};