import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import { TransactionModal } from "@/components/TransactionModal";
import Image from "next/image";
import deleteIcon from "../../assets/Delete.svg";
import editIcon from "../../assets/edit.svg";
import { title } from "process";
import { api } from "@/services/api";
import { AxiosResponse } from "axios";
import { UpdateTransactionModal } from "@/components/UpdateTransactionModal";

type TransactionsType = {
  _id: string;
  name: string;
  cost: number;
  category: string;
  date: string;
};

function Home() {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);
  const [categories, setCategories] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState({} as TransactionsType);

  const [modalAberto, setModalAberto] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleOpenUpdateModal = (data: any) => {
    setDataToUpdate(data);
    setIsUpdateModalOpen(true);
  };
  const handleCloseUpdateModal = () => {
    setDataToUpdate({} as TransactionsType);
    setIsUpdateModalOpen(false);
  };

  const loadData = async () => {
    try {
      const loadExpenses = await api.get("/expense");
      setTransactions(loadExpenses.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await api.delete(`/expense/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalEntradas = transactions.reduce((total, transaction) => {
    return transaction.cost > 0 ? total + transaction.cost : total;
  }, 0);

  const totalSaidas = transactions.reduce((total, transaction) => {
    return transaction.cost < 0 ? total - transaction.cost : total;
  }, 0);

  const total = totalEntradas - totalSaidas;

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-600 text-white relative">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="w-20 h-16 mr-2" />
          <h1 className="text-lg font-semibold">Gerenciamento de Gastos</h1>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={abrirModal}
        >
          Nova Transação
        </button>
        <TransactionModal
          isOpen={modalAberto}
          title="Nova transação"
          onClose={fecharModal}
        />
        <UpdateTransactionModal
          isOpen={isUpdateModalOpen}
          title="Atualize a transação"
          data={dataToUpdate}
          onClose={handleCloseUpdateModal}
        />
      </div>
      <div className="flex justify-around text-center text-2xl p-12">
        <div className="w-2/12 bg-green-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Entradas</h2>
          <p className="font-bold">${totalEntradas.toFixed(2)}</p>
        </div>
        <div className="w-2/12 bg-red-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Saídas</h2>
          <p className="font-bold">${totalSaidas.toFixed(2)}</p>
        </div>
        <div className="w-2/12 bg-blue-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Total</h2>
          <p
            className={`font-bold ${
              total >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-4">
          <h1 className="font-semibold mb-8 text-3xl text-center">
            Histórico de transações
          </h1>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-2xl border-b-2">
                <th className="px-20 py-2 text-center">Transações</th>
                <th className="px-20 py-2 text-center">Valor</th>
                <th className="px-20 py-2 text-center">Categoria</th>
                <th className="px-20 py-2 text-center">Data</th>
                <th className="px-20 py-2 text-center">Editar</th>
                <th className="px-20 py-2 text-center">Deletar</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id} className="border-b">
                  <td className="p-2 text-center">{transaction.name}</td>
                  <td
                    className={`p-2 text-center ${
                      transaction.cost > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.cost >= 0
                      ? `$${transaction.cost}`
                      : `- $${-transaction.cost}`}
                  </td>
                  <td className="p-2 text-center">{transaction.category}</td>
                  <td className="p-2 text-center">{transaction.date}</td>
                  <td className="p-2 text-center">
                    <button onClick={() => handleOpenUpdateModal(transaction)}>
                      <Image
                        className="filter brightness-0 invert"
                        src={editIcon}
                        alt="edit"
                      />
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    <button onClick={() => deleteTransaction(transaction._id)}>
                      <Image
                        className="filter brightness-0 invert"
                        src={deleteIcon}
                        alt="delete"
                      />
                    </button>
                  </td>
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
