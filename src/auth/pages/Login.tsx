import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { useForm } from '../../hooks/useForm';
import { endLogin, startLogin } from '../../redux/reducers/authSlice';
import { RootState } from '../../redux/store';
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

  const { isLoading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(startLogin());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        dispatch(endLogin(uid));
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
          <LoginFormButton disabled={isLoading}>Iniciar Sesión</LoginFormButton>
        </Form>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
