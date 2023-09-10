import { Expense } from "../../models/expense.js";

export async function createExpense(req, res) {
  try {
    const body = req.body;
    const expense = await Expense.insertOne(body);
    return res.status(201).json(expense);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
