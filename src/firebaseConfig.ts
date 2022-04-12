import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCienMNE3ru3gbyC-iFNyqQ7XKVGf9_8xg",
  authDomain: "nationalparkapplication.firebaseapp.com",
  projectId: "nationalparkapplication",
  storageBucket: "nationalparkapplication.appspot.com",
  messagingSenderId: "401139050005",
  appId: "1:401139050005:web:7b0689339a32bfafcb101c",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
