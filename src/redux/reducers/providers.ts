import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseAuth } from '../../firebase/firebase';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, uid } = result.user;
    return {
      ok: true,
      displayName,
      uid,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { displayName, uid } = result.user;
    return {
      ok: true,
      displayName,
      uid,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logoutFromFirebase = async () => {
  return await FirebaseAuth.signOut();
};
