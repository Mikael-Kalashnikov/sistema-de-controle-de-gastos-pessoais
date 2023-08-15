import Image from "next/image";
import exitIcon from "../../assets/exit.svg";
import { useState } from "react";

type TransactionModalProps = {
  isOpen: boolean;
};

type PropsModalTransacao = {
  isOpen: boolean;
  onClose: () => void;
};

export function TransactionModal({ isOpen, onClose }: PropsModalTransacao) {
  if (!isOpen) return null;
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [category, setCategory] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70">
      <main className="w-[480px] bg-gray-600 p-8 rounded-lg">
        <div className="pb-8 flex items-center justify-between">
          <h2 className="text-3xl">Nova Transação</h2>
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
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          className="w-full h-14 p-4 mb-4 text-black border rounded bg-slate-200 border-gray-300"
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="w-full flex justify-between mt-2">
          <button className="w-2/5 bg-green-600 py-4 rounded-lg hover:bg-slate-400">
            Entrada
          </button>
          <button className="w-2/5 bg-red-600 py-4 rounded-lg hover:bg-slate-400">
            Saída
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button className="w-2/5 bg-blue-500 py-4 text-lg hover:bg-slate-400 rounded-lg">
            Cadastrar
          </button>
        </div>
      </main>
    </div>
  );
}
