import multer from 'multer';
import profileSalonConfig from '../config/profileSalonConfig';
import { Salon } from '../models/Salon';

const profileUpload = multer(profileSalonConfig).single('profile');

function create(req,res) {
    return profileUpload(req, res, async (err) => {
        try{
            if(err) {
                return res.status(400).json({
                    errors: [err.code]
                })
            }
            const { idUser } = req.params;
            if(!idUser) {
                return res.status(400).json({
                    errors: ['Parameter idUser not found.']
                })
            }
            const {nome}  = req.body;
            const { filename } = req.file;

            const data = {
                nome,
                profileVirtual: filename,
                avaliacao: '1.0',
                usuarioFk: idUser,
            }
            console.log(data)
            const newSalon = await Salon.create(data);
            return res.status(200).json(data);
    
        }catch (e){
            return res.status(400).json({
                errors: e.errors.map(error => error.message)
            })
        }
    })

}


export {create};