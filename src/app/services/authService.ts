import { firebaseAuth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth';

export async function login(email: string, password: string): Promise<User | null> {
  const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
  return result.user;
}

export async function signup(email: string, password: string): Promise<User | null> {
  const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
  return result.user;
}

export async function logout(): Promise<void> {
  await signOut(firebaseAuth);
}

export function getCurrentUser(): User | null {
  return firebaseAuth.currentUser;
}

export function watchAuthState(callback: (user: User | null) => void) {
  return onAuthStateChanged(firebaseAuth, callback);
}
