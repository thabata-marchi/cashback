import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';

//import { useHistory } from "react-router-dom";

import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo, Plinks, Menu } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';
import { Link } from "react-router-dom";


const Register = () => {
  const inputRef = useRef(null);

  const handleSubmit = async (data) => {
    try {
      inputRef.current.setErrors({});
      const loginValidate = Yup.object().shape({
        nome: Yup.string()
          .min(5, "No mínimo 5 caracteres")
          .max(255, "No máximo 255 caracteres")
          .required("Por favor, digite seu nome completo"), 
        
        email: Yup.string()
          .email("Digite um e-mail válido")
          .min(5, "No mínimo 5 caracteres")
          .max(255, "No máximo 255 caracteres")
          .required("Por favor, informe seu email"), 

        cpf: Yup.string()
          .min(11, "No mínimo 5 caracteres")
          .max(15, "No máximo 255 caracteres")
          .required("Por favor, informe seu CPF"), 

        password: Yup.string()
          .min(8, "No mínimo 8 caracteres")
          .max(128, "No máximo 128 caracteres")
          .required("Campo obrigatório"), 

        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'As senhas devem corresponder')
      });

      await loginValidate.validate(data, {
        abortEarly: false,
      });

      authRegister(data);


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
  

  const authRegister = (data) => {
    const {nome, email, cpf, password, passwordConfirmation} = data;

    console.log("EBAA! Funcionou!", nome, email, cpf, password, passwordConfirmation);

  } 


  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form ref={inputRef} onSubmit={handleSubmit}>
          <BoxWhite>
            <Menu>
              <Link to="/"><Plinks>Login</Plinks></Link>         
            </Menu>            
            <Text>Cadastro de novo revendedor</Text>
            <Input name="nome" placeholder={"Nome completo"} type="text" />
            <Input name="cpf" placeholder={"000.000.000-00"} type="text" />
            <Input name="email" placeholder={"seuemail@empresa.com"} type="email" />
            <Input name="password" placeholder={"senha"} type="password" />
            <Input name="passwordConfirmation" placeholder={"confirmar senha"} type="password" />
            <ButtonLeft type="submit">Criar cadastro</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default Register;