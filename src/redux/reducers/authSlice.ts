import { createSlice } from '@reduxjs/toolkit';

interface Login {
  status: string;
  uid: string | null;
  name: string | null;
  errorMessage: string | null;
}

const initialState: Login = {
  status: 'not-authenticated',
  uid: null,
  name: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return {
        ...state,
        status: 'authenticated',
        uid: payload.uid,
        name: payload.displayName,
        errorMessage: null,
      };
    },
    logout: (state, { payload }) => {
      return {
        ...state,
        status: 'not-authenticated',
        uid: null,
        name: null,
        errorMessage: payload,
      };
    },
    checkingLogin: (state) => {
      return { ...state, status: 'checking' };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingLogin } = authSlice.actions;

export default authSlice.reducer;
