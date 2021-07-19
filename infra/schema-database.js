const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')

class Aluno extends Model{}

Aluno.init({
        
    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },
    matricula:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    anoescolar:{
        type:DataTypes.STRING
    },
    mae:{
        type:DataTypes.STRING,
        allowNull: false
    },
    pai:{
        type:DataTypes.STRING,
        allowNull: false
    },
    endereco:{
        type:DataTypes.STRING
    },
    telefone:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    emailresp:{
        type:DataTypes.STRING
    }
}, {
        sequelize,
        modelName: 'Aluno'
    })


Aluno.sync().then(()=> console.log('db is ready'));

module.exports = Aluno

