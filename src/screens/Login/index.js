import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
//import { useHistory } from "react-router-dom";
import GrupoBoticario from '../../assets/images/logo-grupo.png';
import { Content } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';


const Login = () => {
  const inputRef = useRef(null);

  const handleSubmit = async (data) => {
    try {
      inputRef.current.setErrors({});
      const loginValidate = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .min(5, "No mínimo 5 caracteres")
          .max(255, "No máximo 255 caracteres")
          .required("Campo obrigatório"), 

        password: Yup.string()
          .min(8, "No mínimo 8 caracteres")
          .max(128, "No máximo 128 caracteres")
          .required("Campo obrigatório"), 
      });

      await loginValidate.validate(data, {
        abortEarly: false,
      });

      authLogin(data);

    } catch(err){
      const errorMessages = {};
      if (err instanceof Yup.ValidationError){
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;

        });
        console.log(errorMessages);
        inputRef.current.setErrors(errorMessages);
      }
    }  
  };
  

  const authLogin = (data) => {
    const {email, password} = data;

    console.log("EBAA! Funcionou!", email, password);

  } 



  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form ref={inputRef} onSubmit={handleSubmit}>
          <BoxWhite>
            <Input name="email" type="email" label="E-mail" placeholder={"seuemail@empresa.com.br"} />
            <Input name="password" type="password" label="Senha" placeholder={"*******"} />
            <ButtonLeft type="submit">Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default Login;