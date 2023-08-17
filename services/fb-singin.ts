import firebase_app from "../config/firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user_id", JSON.stringify(result.user.uid));
    // console.log(result);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
