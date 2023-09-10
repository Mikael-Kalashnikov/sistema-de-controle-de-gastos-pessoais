import { ObjectId } from "mongodb";
import { Expense } from "../../models/expense.js";

export async function updateExpense(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    await Expense.updateOne({ _id: new ObjectId(id) }, { $set: body });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return sendStatus(500);
  }
}
