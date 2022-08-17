import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage } from '../Homepage';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
