import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../images/background.jpg';
import { Input } from '../pages/Login';
import { RegButton } from '../pages/Register';

interface LoginButton {
  disabled?: boolean;
}

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${background});
  display: grid;
  place-items: center;
`;

export const CardLogin = styled.div`
  width: 450px;
  min-height: 650px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 60px;
`;

export const LoginTitle = styled.h1`
  padding-bottom: 25px;
`;

export const Form = styled.form``;

export const FormInput = styled.input<Input>`
  height: 3.5em;
  width: 100%;
  margin-top: ${({ margin }) => (margin ? margin : '')};
  padding-left: 25px;
  background: #333;
  border-radius: 7px;
  color: #fff;
  font-size: 1em;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const RegisterInput = styled.input`
  height: 3.5em;
  width: 100%;
  padding-left: 25px;
  background: #333;
  border-radius: 7px;
  color: #fff;
  font-size: 1em;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button<LoginButton>`
  min-height: 3.2em;
  width: 100%;
  margin: 25px 0;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'red')};
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

export const RegisterButton = styled(LoginButton)<RegButton>`
  margin: 0;
  margin-top: ${({ margin }) => (margin ? margin : '')};
  background: #d11114;
  color: #fff;
`;

export const LinkForm = styled(Link)`
  text-decoration: none;
  color: inherit;
  min-height: 3.2em;
  width: 100%;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: #333;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

export const RedirectButton = styled.p`
  margin-top: 15px;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: red;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
