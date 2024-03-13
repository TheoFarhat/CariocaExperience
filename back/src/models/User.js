const DataTypes = require("sequelize")
const sequelize = require("../config/sequelize")

const User = sequelize.define("User", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull:false
    },
    hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        }

}
)

User.associate = function (models) {
    User.belongsToMany(models.Post, {
        through: models.Saved,
        as: 'saved',
        foreignKey: 'UserId'
    });
};


module.exports = User;