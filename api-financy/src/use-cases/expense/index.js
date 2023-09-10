import { createExpense } from "./create-expense.js";
import { getAllExpense } from "./get-all-expense.js";
import { updateExpense } from "./update-expense.js";
import { deleteExpense } from "./delete-expense.js";

export const ExpenseUseCases = {
  createExpense,
  getAllExpense,
  updateExpense,
  deleteExpense,
};
