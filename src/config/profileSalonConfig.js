import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 20000);

export default {
    fileFilter:(req, file, cb) => {
        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            return cb(new multer.MulterError('The file must be JPEG or PNG'))
        }
        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads','salon', 'profile'));
        },
        filename: (req, file, cb) => {
            let newNameFile = `${Date.now()}_${random()}${extname(file.originalname)}`;
            cb(null, newNameFile)
        }
    })
}