import { Router } from "express";
import { CategoryUseCases } from "../use-cases/category/index.js";

const categoryRoutes = Router();
categoryRoutes.post("/", CategoryUseCases.create);
categoryRoutes.get("/", CategoryUseCases.getAllCategories);
categoryRoutes.put("/:id", CategoryUseCases.updateCategory);
categoryRoutes.delete("/:id", CategoryUseCases.deleteCategory);
categoryRoutes.get("/expenses/:id", CategoryUseCases.getAllExpensesByCategory);
export { categoryRoutes };
