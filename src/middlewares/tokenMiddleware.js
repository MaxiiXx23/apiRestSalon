import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export async function tokenMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required.'],
        })
    }
    const [, token] = authorization.split(' ');

    try {
        const datas = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = datas;
        const user = await User.findOne({
            where: {
                id,
                email,
            }
        })
        if(!user) {
            return res.status(401).json({
                errors: ['User is invalid.'],
            })
        }
        req.idUser = id;
        req.emailUser = email;
        return next();

    } catch (e) {
        return res.status(401).json({
            errors: ['Token expired or invalid.'],
        })
    }

}