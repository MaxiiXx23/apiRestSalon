
async function create(req,res) {
    const { idUser } = req.params;
    if(!idUser) {
        return res.status(400).json({
            errors: ['Parameter idUser not found.']
        })
    }
}