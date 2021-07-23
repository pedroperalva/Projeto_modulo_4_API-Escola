const Aluno = require('../models/models-alunos')

module.exports = (app)=>{

    const novoAluno = new Aluno()

    app.post('/alunos', async (req, res)=>{
        const {nome, mae, pai, endereco, telefone, emailresp} = req.body;
        await novoAluno.criarAluno(nome, mae, pai, endereco, telefone, emailresp)
        .then((result)=>{
            res.status(201).json({result, mensagem: "Aluno criado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao criar Aluno"})
        })

    })

    app.get('/alunos', async (req, res)=>{
        await novoAluno.getAluno()
        .then((result)=>{
            res.status(200).json({result, mensagem: "Alunos encontrados com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao buscar Alunos"})
        })
    })

    app.get('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp
        await novoAluno.getAlunoEmail(emailresp)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno encontrado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao buscar Aluno"})
        })
    })

    app.put('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp
        const body = req.body
        await novoAluno.updateAlunoEmail(emailresp, body)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno modificado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao modificar Aluno"})
        })
    })

    app.delete('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp
        await novoAluno.deleteAlunoEmail(emailresp)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno deletado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao deletar Aluno"})
        })
    })
}
