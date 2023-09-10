import { Router } from "express";
import { categoryRoutes } from "./category-routes.js";
import { expenseRoutes } from "./expense-routes.js";

const routes = Router();
routes.use("/category", categoryRoutes);
routes.use("/expense", expenseRoutes);
export { routes };
