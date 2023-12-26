const {Model, DataTypes} = require('sequelize');    
const sequelize = require('../config/connection');

class Roles extends Model {}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'roles',
    }
);  

module.exports = Roles;