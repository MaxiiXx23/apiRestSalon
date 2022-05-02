import jwt from 'jsonwebtoken';
import { User } from '../models/User';

async function loginUser(req, res) {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                errors: ['Invalid credentials.']
            })
        }
        const user = await User.findOne({ where: { email }})

        if (!user) {
            return res.status(400).json({
                errors: ["User not found."]
            })
        }

        if (!(await user.passwordCompare(senha))) {
            return res.status(400).json({
                errors: ["password is incorrect."]
            })
        }

        const {id} = user;
        
        const tokenUser = jwt.sign({id, email}, 
            process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION
            })

        return res.status(200).json({
            token: tokenUser
        })


    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.message)
        })
    }
}

export { loginUser };