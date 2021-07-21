const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'../projeto_modulo4/infra/database.sqlite'
})
try {
    sequelize.authenticate();
    console.log('Conexão foi estabelecida com sucesso.');
} catch (error) {
    console.error('Não foi possível se conectar ao bando de dados:', error);
}

module.exports = sequelize;