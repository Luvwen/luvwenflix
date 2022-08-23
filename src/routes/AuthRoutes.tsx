import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Navigate replace to='/auth/login' />} />
    </Routes>
  );
};
