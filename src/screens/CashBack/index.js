import React from 'react';
import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo, Plinks, Menu } from '../../assets';
import { Link } from "react-router-dom";

const CashBack = () => {
  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <BoxWhite>
          <Menu>
            <Link to="/list-purchases"><Plinks>Lista de compras |</Plinks></Link>         
            <Link to="/"><Plinks>Logout</Plinks></Link>         
          </Menu>          
          <Text>Cashback: R$ 120,00</Text>
        </BoxWhite>
      </Center>
    </Content>
  );
}

export default CashBack;