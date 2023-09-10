import { Category } from "../../models/category.js";

export async function getAllCategories(req, res) {
  try {
    const categories = await Category.find().toArray();
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
