import express from 'express'
import { v4 as uuid, v4} from 'uuid'
const app = express()

app.use(express.json())

interface User {
    id: string
    name: string
    email: string
}

const users: User[] = []

app.get('/users', (request, response) => {
    // buscar no banco de dados os usuários
    // retornar os usuários
    return response.json(users)
})

app.post('/users', (request, response) => {
    // receber os dados do novo usuário
    const { name, email} = request.body
    // criar um novo usuário
    const user = { id: uuid(), name, email}
    // registrar esse usuário na base de dados
    users.push(user)
    // retornar os dados do usuário criado
    return response.json(user)
})
app.put('/users/:id', (request, response) => {
    // receber os dados do usuário
    const {id} = request.params
    const {name, email} = request.body
    // localizar o usuário na base de dados
    const userIndex = users.findIndex((user) => user.id == id)
    // se o usuário não existir, retornar um erro
    if (userIndex < 0) {
        return response.status(404).json({error: 'Users not found.'})
    }
    const user = { id, name, email}
    // atualiza o usuário na base de dados
    users[userIndex] = user
    // retorna os dados do usuário atualizado  
    return response.json(user)
})
app.delete('/users/:id', (request, response) => {
    // receber id do usuário
    const {id} = request.params
    // localizar o usuário na base de dados
    const userIndex = users.findIndex((user) => user.id == id)
    // se o usuário não existir, retornar um erro
    if (userIndex < 0) {
        return response.status(404).json({error: 'Users not found.'})
    }
    // excluir usuário da base de dados
    users.splice(userIndex, 1)
    // retorna status de sucesso   
    return response.status(204).send()
})

//teste
