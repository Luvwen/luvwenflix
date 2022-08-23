import { Dispatch } from '@reduxjs/toolkit';

import { checkingLogin, login, logout } from './authSlice';
import { signInWithEmailPassword, signInWithGoogle } from './providers';

export const startCheckingLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingLogin());
  };
};

export const startLoginWithGoogle = () => {
  return async (dispatch: Dispatch) => {
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch) => {
    const result = await signInWithEmailPassword(email, password);
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};
