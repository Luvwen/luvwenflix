import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { Homepage } from '../components/Homepage';
import { useCheckAuthStatus } from '../hooks/useCheckAuthStatus';

export const AppRouter = () => {
  const status = useCheckAuthStatus();

  return (
    <Routes>
      {status === 'authenticated' && (
        <Route path='/auth/*' element={<Navigate replace to='/' />} />
      )}

      {status === 'authenticated' ? (
        <Route path='/' element={<Homepage />} />
      ) : (
        <Route path='/*' element={<Navigate replace to='auth/login' />} />
      )}

      <Route path='auth/*' element={<AuthRoutes />} />
    </Routes>
  );
};
