const Aluno = require('../models/models-alunos')

module.exports = (app)=>{

    const novoAluno = new Aluno()

    app.post('/alunos', async (req, res)=>{
        const {nome, mae, pai, endereco, telefone, emailresp} = req.body;
        try{
            let resposta = await novoAluno.criarAluno(nome, mae, pai, endereco, telefone, emailresp)
            res.status(201).json({
                resultado:resposta,
                message:"Aluno criado com sucesso"
            })
        }
        catch(err){
            res.status(400).json({
                erro:err, 
                message:'Erro ao criar o aluno'
            })
        }
    })

    app.get('/alunos', async (req, res)=>{       
        try{
            let resposta = await novoAluno.getAluno()
            res.status(200).json({
                resultado:resposta,
                message:"Sucesso ao acessar o bando de dados"
            })
        }
        catch(err){
            res.status(400).json({
                erro:err, 
                message:'Erro ao acessar o bando de dados'
            })
        }
    })

    app.get('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp
        try{
            let resposta = await novoAluno.getAlunoEmail(emailresp)
            if(Object.values(resposta[0]) === null){
                throw new Error (err)
            }else{
                res.status(200).json({
                    resultado:resposta,
                    message:"Sucesso ao buscar aluno"
                })
            }
            
        }
        catch(err){
            res.status(400).json({
                erro:err, 
                message:'Erro ao buscar aluno'
            })
        }
    })

    app.put('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp
        const body = req.body
        try{
            let resposta = await novoAluno.updateAlunoEmail(emailresp, body)
            if(resposta == 0){
                throw new Error (err)
            }else{
            res.status(200).json({
                resultado:resposta,
                message:'Sucesso ao modificar aluno'
            })
            }   
        }
        catch(err){
            res.status(400).json({
                erro:err, 
                message:'Erro ao modificar aluno'
            })
        }
    })

    app.delete('/alunos/:emailresp', async (req, res)=>{
        const emailresp = req.params.emailresp    
        try{
            let resposta = await novoAluno.deleteAlunoEmail(emailresp)
            if (resposta == 0){
            throw new Error (err)
            } else{
                res.status(200).json({
                    resultado:resposta,
                    message:'Sucesso ao deletar aluno'
                })
            }
        }          
        catch(err){
            res.status(400).json({
                erro:err, 
                message:'Erro ao deletar aluno'
            })
        }
    })
}
