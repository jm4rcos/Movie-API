const express = require('express');
const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.delete);

module.exports = routes;