import { ObjectId } from "mongodb";
import { Category } from "../../models/category.js";

export async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    await Category.findOneAndDelete({ _id: new ObjectId(id) });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
