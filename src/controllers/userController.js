import { User } from "../models/User";

async function create (req, res){
    try {
        const data = req.body;
        const newUser = await User.create(data);

        return res.status(200).json(newUser)
    }catch (e) {
        return res.status(400).json({
            errors: e.errors.map(error => error.message)
        })
    }
}

export {create}