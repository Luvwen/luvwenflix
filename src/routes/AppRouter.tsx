import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../components/routes/HomeRoutes';

export const AppRouter = () => {
  const token = sessionStorage.getItem('token');

  console.log(token);

  return (
    <Routes>
      {token !== null && token !== '' ? (
        <Route path='/*' element={<HomeRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
    </Routes>
  );
};
