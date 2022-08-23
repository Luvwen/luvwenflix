import { FormEvent, MouseEvent } from 'react';

import { useForm } from '../../hooks/useForm';
import { checkingLogin } from '../../redux/reducers/authSlice';
import {
  startLoginWithEmailPassword,
  startLoginWithGoogle,
} from '../../redux/reducers/thunks';
import { useAppDispatch } from '../../redux/store';
import {
  Wrapper,
  CardLogin,
  LoginTitle,
  Form,
  FormInput,
  LoginFormButton,
  LinkForm,
} from '../styles/Login.styled';

export interface Input {
  margin?: string;
}

export const Login = () => {
  const { formValues, handleInputChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const dispatch = useAppDispatch();

  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(checkingLogin());
    dispatch(startLoginWithEmailPassword(email, password));
    resetForm();
  };

  const handleGoogleLogin = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(checkingLogin());
    dispatch(startLoginWithGoogle());
  };
  return (
    <Wrapper>
      <CardLogin>
        <LoginTitle>Inicia sesión</LoginTitle>
        <Form onSubmit={handleLogin}>
          <FormInput
            name='email'
            value={email}
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
          />
          <FormInput
            name='password'
            value={password}
            onChange={handleInputChange}
            margin='20px'
            type='password'
            placeholder='Contraseña'
          />
          <LoginFormButton>Iniciar Sesión</LoginFormButton>
        </Form>
        <button onClick={handleGoogleLogin}>Google</button>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
