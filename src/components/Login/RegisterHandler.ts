// src/components/Register/RegisterHandler.ts
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

interface FormData {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  username: string;
}

export async function registerHandler(formData: FormData): Promise<void> {
  const { email, password, lastName, firstName, middleName, username } = formData;
    console.log("Attempting Firebase createUserWithEmailAndPassword with:", email, password);


  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;

    await setDoc(doc(db, 'users', uid), {
      uid,
      email,
      username,
      fullName: `${firstName} ${middleName || ''} ${lastName}`.trim(),
      createdAt: Timestamp.now(),
    });
}
