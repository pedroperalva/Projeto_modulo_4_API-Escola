//importar o banco de dados para uma variável
const AlunoData = require('../infra/schema-database')

class Aluno {
//método para criar alunos no banco de dados    
    criarAluno(nome,mae,pai,endereco,telefone,emailresp){
        
        return AlunoData.create({

            "nome":nome,
            "mae":mae,
            "pai":pai,
            "endereco":endereco,
            "telefone":telefone,
            "emailresp":emailresp
        })
    }
//método de buscar todos os alunos
    getAluno(){

        return AlunoData.findAll()
    }
//método de buscar o aluno pelo email
    getAlunoEmail(emailresp){

        return AlunoData.findAll({where: {emailresp:emailresp}})
    }
//método de alterar o aluno pelo email passando o que vai ser alterado pelo body
    updateAlunoEmail(emailresp, body){

        return AlunoData.update(body, {where: {emailresp:emailresp}})
    }
//método de deletar alunos pelo email
    deleteAlunoEmail(emailresp){

        return AlunoData.destroy({where: {emailresp:emailresp}})
    }
}

module.exports = Aluno