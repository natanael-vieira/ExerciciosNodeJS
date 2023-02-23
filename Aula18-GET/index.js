import express from 'express';

const app = express();
const PORT = 3000;
let users = [
    {id: 1, name: 'Natan Vieira', age: 35},
    {id: 2, name: 'Thais Vieira', age: 35},
]

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>');
});

app.get('/users', (request, response) => {
    return response.send(users);
})

app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId))
    })
    return response.send(user);
});
