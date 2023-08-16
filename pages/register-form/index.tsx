import { useRouter } from "next/router";
import { useState } from "react";
import signUp from "@/services/fb-signup";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/login");
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <form className="p-8 bg-gray-600 w-1/2">
        <h2 className="text-5xl mb-6">Cadastre-se</h2>
        <div>
          <input
            className="w-full mx-auto p-4 mb-8 text-black border rounded bg-slate-200 border-gray-300"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="w-full mx-auto p-4 mb-8 text-black border rounded bg-slate-200 border-gray-300"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="w-3/12 mx-auto bg-blue-500 text-white text-3xl p-3 rounded-2xl hover:bg-blue-600"
            type="submit"
            onClick={handleForm}
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}
