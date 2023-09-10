import { ObjectId } from "mongodb";
import { Expense } from "../../models/expense.js";

export async function deleteExpense(req, res) {
  try {
    const { id } = req.params;
    await Expense.deleteOne({ _id: new ObjectId(id) });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
