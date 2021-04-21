import ToDoController from './controllers/toDoController';
import express from 'express';
import './dataBase/dataBase'

const app = express();
const porta = 3333;

app.use(express.json());

app.get('/todo', ToDoController.get);
app.post('/todo', ToDoController.post);
app.put('/todo/:titulo',ToDoController.put);
app.delete('/todo/:id', ToDoController.delete);

app.listen(porta, () => {
    console.log("logado na porta" + porta);
});