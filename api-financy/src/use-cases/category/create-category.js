import { Category } from "../../models/category.js";

export async function create(req, res) {
  try {
    const body = req.body;
    const category = await Category.insertOne(body);
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
