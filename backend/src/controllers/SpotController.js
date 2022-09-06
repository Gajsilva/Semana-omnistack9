const Spot = require('../models/Spot')

module.exports = {
    async index (res, req) {
        
    },

    async store (res, req) {
        const {filename} = req.file;
        const {company, techs, price} = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json( {error: 'Usuario não existe' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        })

        return res.json(spot)
    }
}