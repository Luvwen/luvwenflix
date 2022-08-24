import { MouseEvent } from 'react';
import { startLogoutFromFirebase } from '../redux/reducers/thunks';
import { useAppDispatch } from '../redux/store';

export const Homepage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    dispatch(startLogoutFromFirebase());
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
