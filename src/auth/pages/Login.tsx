import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent } from 'react';
import { auth } from '../../firebase/firebase';
import { useForm } from '../../hooks/useForm';
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

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        sessionStorage.setItem('token', uid);
      })
      .catch((err) => console.log(err));

    // resetForm();
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
          <LoginButton>Iniciar Sesión</LoginButton>
        </Form>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
