import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Form } from '@unform/web';

import { useHistory } from "react-router-dom";

import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';


const Login = () => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form onSubmit={handleSubmit}>
          <BoxWhite>
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <ButtonLeft type="submit">Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default Login;