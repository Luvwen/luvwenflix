import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../components/routes/HomeRoutes';
import { RootState } from '../redux/store';

export const AppRouter = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {uid !== null && uid !== '' ? (
        <Route path='/*' element={<HomeRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
    </Routes>
  );
};
