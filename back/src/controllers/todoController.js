import todoSchema from '../schema/todo_schema'

class ToDoController{

    async get(req, res){
        const toDo = await todoSchema.find().catch(error => console.log(error) )
        return res.json(toDo);
    }

    async post(req, res){
        const {id, titulo, descricao, date} = req.body;

        await todoSchema.create({id, titulo, descricao, date})
        .catch(error => {
            console.log(error);
        });
        return res.json({id, titulo, descricao, date})
    }

    async put(req, res){
        todoSchema.findOneAndUpdate({"titulo": req.params.titulo, "descricao":req.params.descricao, "date":req.params.date}, req.body)
        .then((result)=>{
          console.log(result)
          return res.json(result)
        })
        .catch((error)=>{
          console.log(error)
          return res.json({"mensagem": "Não funcionou!"})
        })
      }

    async delete(req, res){
        console.log(req.params, req.body)
        todoSchema.find({"id": req.params.id})
        .then((result)=>{
          if (result){
            todoSchema.deleteOne({"id": req.params.id})
            .catch((error)=>{
              console.log(error)
            })
          }
          console.log(result)
          return res.json(result)
        })
        .catch((error)=>{
          console.log(error)
          return res.json({"mensagem": "Não deletou!"})
        })
      }

}

export default new ToDoController(); 