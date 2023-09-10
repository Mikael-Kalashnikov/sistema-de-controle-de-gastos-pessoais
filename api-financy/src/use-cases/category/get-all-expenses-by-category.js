import { ObjectId } from "mongodb";
import { Expense } from "../../models/expense.js";

export async function getAllExpensesByCategory(req, res) {
  try {
    const { id: categoryId } = req.params;
    const pipeline = [
      {
        $match: {
          category: categoryId, // Filtra por categoria desejada
        },
      },
    ];
    const result = await Expense.aggregate(pipeline).toArray();
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
