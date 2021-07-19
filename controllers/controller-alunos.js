const Aluno = require('../models/models-alunos')

module.exports = (app)=>{

    const novoAluno = new Aluno()

    app.post('/alunos', async (req, res)=>{
        const {nome, mae, pai, anoescolar, endereco, telefone, emailresp} = req.body;
        await novoAluno.criarAluno(nome, mae, pai, anoescolar, endereco, telefone, emailresp)
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

    app.get('/alunos/:matricula', async (req, res)=>{
        const matricula = req.params.matricula
        await novoAluno.getAlunoMatricula(matricula)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno encontrado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao buscar Aluno"})
        })
    })

    app.put('/alunos/:matricula', async (req, res)=>{
        const matricula = req.params.matricula
        const body = req.body
        await novoAluno.updateAluno(matricula, body)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno modificado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao modificar Aluno"})
        })
    })

    app.delete('/alunos/:matricula', async (req, res)=>{
        const matricula = req.params.matricula
        await novoAluno.deleteAluno(matricula)
        .then((result)=>{
            res.status(200).json({result, mensagem: "Aluno modificado com sucesso"})
        })
        .catch((err)=>{
            res.status(400).json({err, mensagem: "Erro ao modificar Aluno"})
        })
    })
}
