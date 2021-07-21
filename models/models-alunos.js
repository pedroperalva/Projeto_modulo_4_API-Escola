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
//método de buscar o aluno pela matrícula
    getAlunoMatricula(matricula){

        return AlunoData.findByPk(matricula)
    }
//método de alterar o aluno pela matrícula passando o que vai ser alterado pelo body
    updateAlunoMatricula(matricula, body){

        return AlunoData.update(body, {where: {matricula:matricula}})
    }
//método de deletar alunos pela matrícula
    deleteAlunoMatricula(matricula){

        return AlunoData.destroy({where: {matricula:matricula}})
    }
}

module.exports = Aluno