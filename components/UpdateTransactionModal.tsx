import { useEffect, useState } from "react";
import Image from "next/image";
import exitIcon from "@/assets/exit.svg";
import { api } from "@/services/api";

type TransactionModalProps = {
  isOpen: boolean;
};

type PropsModalTransacao = {
  isOpen: boolean;
  title: string;
  data: {
    _id: string;
    name: string;
    cost: number;
    category: string;
    date: string;
  };
  onClose: () => void;
};

export function UpdateTransactionModal({
  isOpen,
  title,
  data,
  onClose,
}: PropsModalTransacao) {
  if (!isOpen) return null;
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const loadData = () => {
    setDescription(data.name);
    setPrice(String(data.cost));
    setCategory(data.category);
    setDate(data.date);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateTransaction = async () => {
    try {
      const expense = {
        name: description,
        cost: price,
        category,
        date,
      };
      await api.put(`/expense/${data._id}`, expense);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70">
      <main className="w-[480px] bg-gray-600 p-8 rounded-lg">
        <div className="pb-8 px-4 flex items-center justify-between">
          <h2 className="text-3xl">{title}</h2>
          <button onClick={onClose}>
            <Image src={exitIcon} alt="Sair do modal" />
          </button>
        </div>
        <input
          className="w-full h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Tipo de transação"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="w-full h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="R$00.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="w-full h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="w-full h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* <div className="w-full flex justify-between mt-2">
          <button className="w-2/5 bg-green-600 py-4 rounded-lg hover:bg-slate-400">
            Entrada
          </button>
          <button className="w-2/5 bg-red-600 py-4 rounded-lg hover:bg-slate-400">
            Saída
          </button>
        </div> */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleUpdateTransaction}
            className="w-2/5 bg-blue-500 py-4 text-lg hover:bg-slate-400 rounded-lg"
          >
            Cadastrar
          </button>
        </div>
      </main>
    </div>
  );
}
