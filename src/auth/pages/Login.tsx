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
  return (
    <Wrapper>
      <CardLogin>
        <LoginTitle>Inicia sesión</LoginTitle>
        <Form>
          <FormInput type='email' placeholder='Email' />
          <FormInput margin='20px' type='password' placeholder='Contraseña' />
          <LoginButton>Iniciar Sesión</LoginButton>
        </Form>
        <LinkForm to='/auth/register'>Registrarse</LinkForm>
      </CardLogin>
    </Wrapper>
  );
};
