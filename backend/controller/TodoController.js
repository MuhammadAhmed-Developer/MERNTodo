const TodoModle = require("../models/Todo")

module.exports.getTodos = async (req, res) => {
    const todos = await TodoModle.find()
    res.send(todos)
}

module.exports.saveTodo = (req, res) => {
    const {todo} = req.body
    TodoModle.create({todo})
    .then(data=>{
        console.log('Saved Todo successfully')
        res.status(201).send(data)
    }).catch(err=>{
        console.log('error', err)
        res.send({error: err, msg: "SomeThing went wrong"})
    })
}


module.exports.updateTodo =  (req, res) => {
    const {id} = req.params
    const {todo} = req.body
    TodoModle.findByIdAndUpdate(id, {todo})
    .then(()=>{
        res.send('Update Todo successfully')
    }).catch(err=>{
        console.log('error', err)
        res.send({error: err, msg: "SomeThing went wrong"})
    })
}

module.exports.deleteTodo =  (req, res) => {
    const {id} = req.params
    TodoModle.findByIdAndDelete(id)
    .then(()=>{
        res.send('Delete Todo successfully')
    }).catch(err=>{
        console.log('error', err)
        res.send({error: err, msg: "SomeThing went wrong"})
    })
}