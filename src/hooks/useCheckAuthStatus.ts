import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/firebase';
import { login, logout } from '../redux/reducers/authSlice';

export const useCheckAuthStatus = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(null));

      const { uid, displayName } = user;
      dispatch(login({ uid, displayName }));
    });
  }, [dispatch]);

  return status;
};
