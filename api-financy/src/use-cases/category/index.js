import { create } from "./create-category.js";
import { getAllCategories } from "./get-all-categories.js";
import { updateCategory } from "./update-category.js";
import { getAllExpensesByCategory } from "./get-all-expenses-by-category.js";
import { deleteCategory } from "./delete-category.js";

export const CategoryUseCases = {
  create,
  getAllCategories,
  updateCategory,
  getAllExpensesByCategory,
  deleteCategory,
};
