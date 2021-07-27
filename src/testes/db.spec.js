const request = require("supertest")
const app = require("../app")

describe('Teste das rotas', ()=>{
    it('should get my route alunos', async ()=>{
        const res = await request(app).get('/alunos')
        expect(res.statusCode).toEqual(200)
        expect(res.error).toBe(false)
        expect(res.body).toHaveProperty('resultado')
    })

    it('should post on my route alunos', async ()=>{
        const res = await request(app).post('/alunos').send({
            nome:"Nome",
            mae:"Mae",
            pai:"Pai",
            endereco:"endereco",
            telefone:2154548787,
            emailresp:"teste@teste.com"
        })
        expect(res.statusCode).toEqual(201)
        expect(res.error).toBe(false)
        expect(res.body).toHaveProperty('resultado')     
    })

    it('should get my route alunos with email param', async ()=>{
        const res = await request(app).get('/alunos/teste@teste.com')
        expect(res.statusCode).toEqual(200)
        expect(res.error).toBe(false)
        expect(res.body).toHaveProperty('resultado')
    })

    it('should put on my route alunos with email param', async ()=>{
        const res = await request(app).put('/alunos/teste@teste.com').send({
            nome:"Nome",
            mae:"Mae",
            pai:"Pai",
            endereco:"endereco novo",
            telefone:2154548787,
            emailresp:"teste@teste.com"
        })
        expect(res.statusCode).toEqual(200)
        expect(res.error).toBe(false)
        expect(res.body).toHaveProperty('resultado')
    })
    
    it('should delete on my route alunos with email param', async ()=>{
        const res = await request(app).delete('/alunos/teste@teste.com')
        expect(res.statusCode).toEqual(200)
        expect(res.error).toBe(false)
        expect(res.body).toHaveProperty('resultado')
    })
})


   





