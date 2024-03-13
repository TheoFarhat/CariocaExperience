const DataTypes = require("sequelize")
const sequelize = require("../config/sequelize")

const Post = sequelize.define("Post", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    data: {
        type: DataTypes.STRING,
        allowNull:false
    },
    place: {
        type: DataTypes.STRING,
        allowNull:false
    },
    is_paid: { 
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    price: {
        type:DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
  
},
    { timestamps: false })

Post.associate = function (models) {
    Post.belongsToMany(models.User, {
        through: models.Saved,
        as: 'saved',
        foreignKey: 'PostId'
    });
};
    



module.exports = Post;