import React, { useEffect, useContext, useState } from 'react';
import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text, DataPurchase, UlDataPurchase, LiDataPurchase } from './styles';
import { Center, BoxWhite, Logo, Plinks, Menu } from '../../assets';

import { store } from '../../store';
import api from '../../api/api';
import { Link } from "react-router-dom";

const ListPurchases = () => {
  const globalStore = useContext(store);
  const { token } = globalStore;

  const [arrListPurchases, setArrListPurchases] = useState([]);

  console.log("AQUI", token, arrListPurchases);

  useEffect(() => {
    connectList();
  })
  
  const connectList = async () => {
    try {
      const response = await api.ListResellers(token);
      if (response.status === 200) {
        console.log(response.data.resultado);
        setArrListPurchases(response.data.resultado.users);
      }
    } catch (e){
      console.log(e); 
    }
  }

  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <BoxWhite>
          <Menu>
            <Link to="/cadastre-purchases"><Plinks>Cadastro de compras |</Plinks></Link>         
            <Link to="/cashback"><Plinks>Cashback |</Plinks></Link>
            <Link to="/"><Plinks>Logout</Plinks></Link>         
          </Menu>
          
          <Text>Compras cadastradas</Text>
          <DataPurchase>
          { 
            arrListPurchases !== '' ?
              (
                arrListPurchases.filter((user) => user.email === "tata@gmail.com").map((compras) => compras.purchases.map((itens) => 
                  (
                  <UlDataPurchase>            
                    <LiDataPurchase><b>Código do produto:</b> {itens.code}</LiDataPurchase>
                    <LiDataPurchase><b>Valor do produto:</b> {itens.value_purchase}</LiDataPurchase>
                    <LiDataPurchase><b>Data da compra:</b> {itens.date_purchase}</LiDataPurchase>
                  </UlDataPurchase>
                  )
                ))

              ) 
            :
            (
              <UlDataPurchase>
                <LiDataPurchase>
                  Lista vazia!
                </LiDataPurchase>
              </UlDataPurchase>  
            )
          }
          </DataPurchase>

        </BoxWhite>
      </Center>
    </Content>
  );
}

export default ListPurchases;