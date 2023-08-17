// import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./login";
import { AuthContextProvider } from "@/components/AuthContext";
// import { AuthContextProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Login onLogin={undefined}></Login>;
}
