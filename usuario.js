const sequelize = require('sequelize')
const connection = require('./Database')

const usuario = connection.define('usuario', {
    id:{
        type : sequelize.INTEGER,
        AutoIncremente : true,
        primaryKey : true,
        Allownull : false,
    },
    nome:{
        type : sequelize.STRING(100),
        Allownull : false,
    }
})