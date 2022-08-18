import { FormEvent } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { useForm } from '../../hooks/useForm';
import { checkEmail, checkPassword, checkUsername } from '../../utils/helpers';

import {
  CardLogin,
  Form,
  FormInput,
  LoginLink,
  LoginTitle,
  RedirectButton,
  RegisterButton,
  Wrapper,
} from '../styles/Login.styled';
export interface RegButton {
  margin?: string;
}

export const Register = () => {
  const { formValues, handleInputChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { username, email, password, confirmPassword } = formValues;

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      checkUsername(username) &&
      checkEmail(email) &&
      checkPassword(password, confirmPassword)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    resetForm();
  };

  return (
    <Wrapper>
      <CardLogin>
        <LoginTitle>Registrarse</LoginTitle>
        <Form onSubmit={onSubmit}>
          <FormInput
            name='username'
            value={username}
            onChange={handleInputChange}
            placeholder='Nombre'
          />
          <FormInput
            name='email'
            value={email}
            onChange={handleInputChange}
            margin='30px'
            type='email'
            placeholder='Email'
          />
          <FormInput
            name='password'
            value={password}
            onChange={handleInputChange}
            margin='30px'
            type='password'
            placeholder='Contraseña'
          />
          <FormInput
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleInputChange}
            margin='30px'
            type='password'
            placeholder='Repetir contraseña'
          />
          <RegisterButton margin='20px'>Registrarse</RegisterButton>
        </Form>
        <RedirectButton>
          ¿Ya tienes una cuenta?
          <LoginLink to='/auth/login'>Inicia sesión</LoginLink>
        </RedirectButton>
      </CardLogin>
    </Wrapper>
  );
};
