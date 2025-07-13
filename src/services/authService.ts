// src/services/authService.ts
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { saveUserProfile } from './firestoreService';
import { Timestamp } from 'firebase/firestore';

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  username: string;
}

export async function registerUser(data: RegisterData): Promise<User> {
  const { email, password, fullName, username } = data;

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  await saveUserProfile(uid, {
    fullName,
    username,
    email,
     createdAt: Timestamp.now(),
  });

  return userCredential.user;
}
