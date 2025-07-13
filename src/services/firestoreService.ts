import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function saveUserProfile(uid: string, userData: Record<string, any>): Promise<void> {
  const docRef = doc(db, 'users', uid);
  await setDoc(docRef, userData);
}
