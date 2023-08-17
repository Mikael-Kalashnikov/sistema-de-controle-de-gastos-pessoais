import firebase_app from "@/config/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getDatabase(firebase_app);
export default async function addData(colllection: any, id: any, data: any) {
  let result = null;
  let error = null;
  try {
    const userId = localStorage.getItem("user_id");
    result = await set(ref(db, `transactions`), data);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
