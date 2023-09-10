import { Router } from "express";
import { ExpenseUseCases } from "../use-cases/expense/index.js";

const expenseRoutes = Router();
expenseRoutes.post("/", ExpenseUseCases.createExpense);
expenseRoutes.get("/", ExpenseUseCases.getAllExpense);
expenseRoutes.put("/:id", ExpenseUseCases.updateExpense);
expenseRoutes.delete("/:id", ExpenseUseCases.deleteExpense);
export { expenseRoutes };
