import multer from 'multer';
import profileSalonConfig from '../config/profileSalonConfig';
import { Salon } from '../models/Salon';

const profileUpload = multer(profileSalonConfig).single('profile');

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


export {update};