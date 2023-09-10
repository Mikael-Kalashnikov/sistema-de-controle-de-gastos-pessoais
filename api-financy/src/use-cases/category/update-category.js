import { ObjectId } from "mongodb";
import { db } from "../../infra/db.js";
import { Category } from "../../models/category.js";

export async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    await Category.updateOne({ _id: new ObjectId(id) }, { $set: body });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
