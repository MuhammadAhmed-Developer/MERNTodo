const {Router} = require("express");
const { getTodos, saveTodo, deleteTodo, updateTodo } = require("../controller/TodoController");

const router = Router()

router.get("/gettodo", getTodos);
router.post("/savetodo", saveTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router