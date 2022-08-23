import { createSlice } from '@reduxjs/toolkit';

interface Login {
  status: string;
  uid: string | null;
  name: string | null;
}

const initialState: Login = {
  status: 'not-authenticated',
  uid: null,
  name: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        status: 'authenticated',
        uid: action.payload.uid,
      };
    },
    logout: (state, payload) => {
      return { ...state, status: 'not-authenticated', uid: null, name: null };
    },
    checkingLogin: (state) => {
      return { ...state, status: 'checking' };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingLogin } = authSlice.actions;

export default authSlice.reducer;
