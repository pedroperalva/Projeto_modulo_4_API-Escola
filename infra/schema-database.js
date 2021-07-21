const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')

class Aluno extends Model{}

Aluno.init({
        
    nome:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            startsWithUpper: function (nome){
                let first = nome.charAt(0)
                let startsWithUpper = first === first.toUpperCase()
                if (!startsWithUpper){
                    throw new Error("A primeira letra do nome precisa ser maiúscula")
                }else{

                }
            }
        }
    },
    matricula:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mae:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            startsWithUpper: function (nome){
                let first = nome.charAt(0)
                let startsWithUpper = first === first.toUpperCase()
                if (!startsWithUpper){
                    throw new Error("A primeira letra do nome precisa ser maiúscula")
                }else{

                }
            }
        }
    },
    pai:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            startsWithUpper: function (nome){
                let first = nome.charAt(0)
                let startsWithUpper = first === first.toUpperCase()
                if (!startsWithUpper){
                    throw new Error("A primeira letra do nome precisa ser maiúscula")
                }else{

                }
            }
        }
    },
    endereco:{
        type:DataTypes.STRING
    },
    telefone:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            len:{
                args:[10,11],
                msg:"Insira um número de telefone ou celular válido, entre 10 e 11 números com DDD"
            },
            isNumeric:{
                args:true,
                msg:"Insira somente números"}
        }
    },
    emailresp:{
        type:DataTypes.STRING,
        validate:{
            isEmail:{
                args:true,
                msg:"Insira um email válido"}
        }
    }
}, {
        sequelize,
        modelName: 'Aluno'
    })


Aluno.sync().then(()=> console.log('db is ready'));

module.exports = Aluno

