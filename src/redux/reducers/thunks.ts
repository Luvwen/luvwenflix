import { Dispatch } from '@reduxjs/toolkit';

import { checkingLogin, login, logout } from './authSlice';
import {
  logoutFromFirebase,
  signInWithEmailPassword,
  signInWithGoogle,
} from './providers';

export const startCheckingLogin = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingLogin());
  };
};

export const startLoginWithGoogle = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingLogin());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingLogin());
    const result = await signInWithEmailPassword(email, password);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startLogoutFromFirebase = () => {
  return async (dispatch: Dispatch) => {
    await logoutFromFirebase();
    dispatch(logout(null));
  };
};
