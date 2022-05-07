import { User } from "../models/User";

async function create(req, res) {
    try {
        const data = req.body;
        const newUser = await User.create(data);

        return res.status(200).json(newUser)
    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.message)
        })
    }
}
async function update(req, res) {
    try {
        const {idUser} = req.params;
        if(!idUser) {
            return res.status(400).json({
                errors: ["Parameter idUser not found."]
            })
        }
        const user = await User.findByPk(idUser);
        if(!user){
            return res.status(400).json({
                errors: ["User not exists."]
            })
        }

        const userUpdated = await user.update(req.body);
        const {id,email, nome, sobrenome, foto, idade}  = userUpdated;

        return res.status(200).json({id,email, nome, sobrenome, foto, idade})
    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.message)
        })
    }
}

async function profile(req, res) {
    try{
        const { idUser } = req.params;
        if(!idUser){
            return res.status(400).json({
                errors: ["Parameter idUser not found"]
            })
        }
        const user = await User.findByPk(idUser, {
            attributes: ['id', 'email', 'nome', 'sobrenome','foto']
        });

        if(!user) {
            return res.status(400).json({
                errors: ['User not found.']
            })
        }
        return res.status(200).json(user)
        
    }catch (e) {
        return res.status(400).json({
            errors: e.errors.map( error => error.message)
        })
    }
}


export { create, update, profile }