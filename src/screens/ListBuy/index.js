import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Form } from '@unform/web';

import { useHistory } from "react-router-dom";

import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';


const ListBuy = () => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <BoxWhite>
          <Text>Compras cadastradas</Text>
        </BoxWhite>
      </Center>
    </Content>
  );
}

export default ListBuy;