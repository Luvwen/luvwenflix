import { FormEvent, MouseEvent, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import {
  startLoginWithEmailPassword,
  startLoginWithGoogle,
} from '../../redux/reducers/thunks';
import { RootState, useAppDispatch } from '../../redux/store';
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

  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(startLoginWithEmailPassword(email, password));

    resetForm();
  };

  const handleGoogleLogin = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    dispatch(startLoginWithGoogle());
  };

  useEffect(() => {
    errorMessage !== null &&
      Swal.fire({
        title: 'Invalid credentials',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try again',
      });
  }, [errorMessage]);

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
          <LoginFormButton disabled={isAuthenticating}>
            Iniciar Sesión
          </LoginFormButton>
        </Form>
        <button disabled={isAuthenticating} onClick={handleGoogleLogin}>
          Google
        </button>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
