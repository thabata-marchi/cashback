import React from 'react';
import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo } from '../../assets';

const ListBuy = () => {

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