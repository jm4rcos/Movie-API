const { Sequelize, DataTypes, Model } = require('@sequelize/core');
const dbConfig = require('../../config/config.json');
const sequelize = new Sequelize(dbConfig.development);

class Movie extends Model {}
Movie.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'movies'
});

module.exports = Movie;