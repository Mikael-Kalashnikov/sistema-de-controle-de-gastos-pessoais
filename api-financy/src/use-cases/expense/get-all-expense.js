import { Expense } from "../../models/expense.js";

export async function getAllExpense(req, res) {
  try {
    const expenses = await Expense.find({}).toArray();
    return res.json(expenses);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
