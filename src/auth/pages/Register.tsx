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
  return (
    <Wrapper>
      <CardLogin>
        <LoginTitle>Registrarse</LoginTitle>
        <Form>
          <FormInput margin='20px' placeholder='Nombre' />
          <FormInput margin='20px' type='email' placeholder='Email' />
          <FormInput margin='20px' type='password' placeholder='Contraseña' />
          <FormInput
            margin='20px'
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
