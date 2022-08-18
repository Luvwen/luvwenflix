import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../components/routes/HomeRoutes';

export const AppRouter = () => {
  const status: string = 'authenticated';

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<HomeRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
    </Routes>
  );
};
