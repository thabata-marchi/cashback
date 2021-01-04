import React, { useRef } from 'react';
import * as yup from 'yup';

import { Form } from '@unform/web';

import { useHistory } from "react-router-dom";

import GrupoBoticario from '../../assets/images/logo-grupo.png';
import { colors, linearColor } from '../../theme';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';


const Register = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);  
  }


  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <BoxWhite>
            <Text>Cadastro de novo revendedor</Text>
            <Input name="nome" placeholder="Nome completo" type="text" />
            <Input name="cpf" placeholder="CPF" type="text" />
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Input name="confirmPass" placeholder="Confirmação de senha" type="password" />
            <ButtonLeft type="submit" formRef={formRef}>Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default Register;