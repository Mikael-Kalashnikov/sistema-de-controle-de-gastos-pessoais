import Link from "next/link";
import React from "react";
import logo from "../Images/logo.png";

function Home() {
  const transactions = [
    {
      id: 1,
      name: "Alimentação",
      amount: -50,
      type: "Despesa",
      date: "2023-08-10",
    },
    {
      id: 2,
      name: "Salário",
      amount: 1000,
      type: "Receita",
      date: "2023-08-15",
    },
  ];

  const totalEntradas = transactions.reduce((total, transaction) => {
    return transaction.amount > 0 ? total + transaction.amount : total;
  }, 0);

  const totalSaidas = transactions.reduce((total, transaction) => {
    return transaction.amount < 0 ? total - transaction.amount : total;
  }, 0);

  const total = totalEntradas - totalSaidas;

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-600 text-white">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="w-20 h-16 mr-2" />
          <h1 className="text-lg font-semibold">Gerenciamento de Gastos</h1>
        </div>
        <Link href={""}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Nova Transação
          </button>
        </Link>
      </div>
      <div className="flex justify-around p-12">
        <div className="w-2/12 bg-green-500 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Entradas</h2>
          <p className="text-xl font-bold">${totalEntradas}</p>
        </div>
        <div className="w-2/12 bg-red-500 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Saídas</h2>
          <p className="text-xl font-bold">${totalSaidas}</p>
        </div>
        <div className="w-2/12 bg-blue-500 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total</h2>
          <p
            className={`text-xl font-bold ${
              total >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ${total}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-4">
          <h1 className="font-semibold mb-8 text-3xl text-center">
            Entradas e saídas
          </h1>
          <table className="w-full">
            <thead>
              <tr className="text-2xl">
                <th className="px-24">Nome</th>
                <th className="px-24">Valor</th>
                <th className="px-24">Tipo</th>
                <th className="px-24">Data</th>
                <th className="px-24"></th>
                <th className="px-24"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="p-2 text-center">{transaction.name}</td>
                  <td
                    className={`p-2 text-center ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount >= 0
                      ? `$${transaction.amount}`
                      : `- $${-transaction.amount}`}
                  </td>
                  <td className="p-2 text-center">{transaction.type}</td>
                  <td className="p-2 text-center">{transaction.date}</td>
                  <td className="p-2 text-center">
                    <Link href={""}></Link>
                  </td>
                  <td className="p-2 text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
