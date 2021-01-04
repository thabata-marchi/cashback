import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Form } from '@unform/web';

import { useHistory } from "react-router-dom";

import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';


const BuyRegister = () => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form onSubmit={handleSubmit}>
          <BoxWhite>
            <Text>Cadastro de compras</Text>
            <Input name="code" placeholder="Digite o código" type="text" />
            <Input name="valor" placeholder="Valor do produto" type="text" />
            <Input name="data" placeholder="Data da compra" type="text" />
            <ButtonLeft type="submit">Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default BuyRegister;