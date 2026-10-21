import { Router } from "express";
import { TodosController } from "../controllers/todos";

const router = Router();

const todoController = new TodosController();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo)

export default router;