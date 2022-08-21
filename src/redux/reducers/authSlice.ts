import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Login {
  isLoading: boolean;
  isLogged: boolean;
  uid: string;
}

const initialState: Login = {
  isLoading: false,
  isLogged: false,
  uid: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogin: (state) => {
      return { ...state, isLoading: true, isLogged: false, uid: '' };
    },
    endLogin: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        uid: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLogin, endLogin } = authSlice.actions;

export default authSlice.reducer;
