const Movie = require('../models/Movies');

module.exports = {
    async index(req, res) {
        const movies = await Movie.findAll();
        return res.json(movies);
    },

    async store(req, res) {
        try {
            const movie = await Movie.create(req.body)
            return res.json(movie);
        } catch (error) {
            return res.status(400).json({ err: error.message });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(400).json({ error: err.message });
        }
        await movie.update(req.body);
        return res.json(movie);
    },

    async delete(req, res) {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(400).json({ error: 'Movie not found' });
        }
        await movie.destroy();
        return res.json(movie);
    }
};