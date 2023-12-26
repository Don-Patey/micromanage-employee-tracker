const {Model, DataTypes} = require('sequelize');    
const sequelize = require('../config/connection');
const e = require('express');

// create our Department model
class Department extends Model {}

addEmployeePrompts.init(
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
        modelName: 'department',

    }
);

module.exports = employee;