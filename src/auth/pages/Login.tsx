import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useReducer } from 'react';
import { auth } from '../../firebase/firebase';
import { useForm } from '../../hooks/useForm';
import { ActionType, authReducer } from '../../reducers/authReducer';
import {
  Wrapper,
  CardLogin,
  LoginTitle,
  Form,
  FormInput,
  LoginButton,
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

  const [{ isLoading }, dispatch] = useReducer(authReducer, {
    isLoading: false,
    isLogged: false,
    uid: '',
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch({
      type: ActionType.AUTH_START_LOGIN,
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        dispatch({ type: ActionType.AUTH_END_LOGIN, payload: uid });
        sessionStorage.setItem('token', uid);
      })
      .catch((err) => console.log(err));

    resetForm();
  };

  return (
    <Wrapper>
      <CardLogin>
        <LoginTitle>Inicia sesión</LoginTitle>
        <Form onSubmit={handleSubmit}>
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
          <LoginButton disabled={isLoading}>Iniciar Sesión</LoginButton>
        </Form>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
