import express from 'express'
const app = express()

// Métodos HTTP -> GET | POST | PUT | DELETE

// Get - obter a lista de usuarios em http://api.meusite.com/users
// Post - criar um novo usuario em http://api.meusite.com/users
// Put - atualizar um usuario em http://api.meusite.com/users
// Delete - deletar um usuario em http://api.meusite.com/users
// http://api.meusite.com/users

// http://localhost:3333/users

app.get('/users', (request, response) => {
    return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users' , (request, response) => {
    return response.json({ message: 'Criando usuários'})
})

app.put('/users' , (request, response) => {
    return response.json({ message: 'Atualizando usuário'})
})

app.delete('/users' , (request, response) => {
    return response.json({ message: 'Excluindo usuário'})
})

app.listen('3333', () => {
    console.log('Back-end Started!')
})