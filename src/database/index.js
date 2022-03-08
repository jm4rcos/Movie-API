const Sequelize = require('sequelize');
const dbConfig = require('../../config/config.json');

const connection = new Sequelize(dbConfig.development);

const Movie = require('../models/Movies');

Movie.init(connection);

module.exports = connection;