import express from 'express'
const app = express()

//  Tipos de Parâmetros

//  Query Params
//  Route Params
//  Request Body

app.get('/users', (request, response) => {
    const query = request.query
    
    console.log(query)
    return response.json({})
})
//teste
