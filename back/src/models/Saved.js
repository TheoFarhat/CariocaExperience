const { BelongsToMany } = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Saved = sequelize.define('Saved',
    {
        quantity: {
            type: DataTypes.INTEGER,
        }
    },
    { timestamps: true }
    
)


module.exports = Saved;

