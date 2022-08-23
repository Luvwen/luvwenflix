import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Homepage } from '../components/Homepage';
import { RootState } from '../redux/store';
import { AuthRoutes } from './AuthRoutes';

export const AppRouter = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  const isLogged = false;

  if (status === 'checking') return <h1>Loading...</h1>;
  return (
    <Routes>
      {isLogged ? (
        <Route path='/' element={<Homepage />} />
      ) : (
        <Route path='/*' element={<Navigate replace to='auth/login' />} />
      )}

      {isLogged && (
        <Route path='/auth/*' element={<Navigate replace to='/' />} />
      )}

      <Route path='auth/*' element={<AuthRoutes />} />
    </Routes>
  );
};
