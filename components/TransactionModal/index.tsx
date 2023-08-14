import Image from "next/image";
import exitIcon from "../../assets/exit.svg";
import { useState } from "react";

type TransactionModalProps = {
  isOpen: boolean;
};

export function TransactionModal({ isOpen }: TransactionModalProps) {
  if (!isOpen) return null;
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 absolute flex items-center justify-center">
      <main className="w-[480px] flex flex-col justify-center bg-gray-600 p-8 rounded-lg">
        <div className="pb-8 flex items-center justify-between">
          <h2 className="text-3xl">Nova Transação</h2>
          <button>
            <Image src={exitIcon} alt="Sair do modal" />
          </button>
        </div>
        <input
          className="h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          className="h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="w-full flex justify-between mt-2">
          <button className="w-2/5 bg-gray-500 py-4 rounded-lg hover:bg-slate-400">
            Entrada
          </button>
          <button className="w-2/5 bg-gray-500 py-4 rounded-lg hover:bg-slate-400">
            Saída
          </button>
        </div>
        <button className="mt-4 bg-green-700 py-4 text-lg hover:bg-green-600 rounded-lg">
          Cadastrar
        </button>
      </main>
    </div>
  );
}
