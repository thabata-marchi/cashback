import React, {useRef} from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';

import GrupoBoticario from '../../assets/images/logo-grupo.png';

import { Content, Text } from './styles';
import { Center, BoxWhite, Logo, Plinks, Menu } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';
import { Link } from "react-router-dom";

const CadastrePurchases = () => {
  const inputRef = useRef(null);

  console.log(new Date().toLocaleDateString());  

  const handleSubmit = async (data) => {
    try {
      inputRef.current.setErrors({});
      const loginValidate = Yup.object().shape({
        code: Yup.string()
          .min(5, "No mínimo 5 caracteres")
          .max(255, "No máximo 255 caracteres")
          .required("Por favor, informe o código do produto"), 
        
        valor: Yup.number()
          .default(function (value) {
            return value.transform((o,v) => parseFloat(v.replace(/,/g, '')));
          }),

        dataCompra: Yup.date()
          .default(function () {
            return new Date().toLocaleDateString();
          }),

      });

      await loginValidate.validate(data, {
        abortEarly: false,
      });

      authRegisterBuy(data);

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
  

  const authRegisterBuy = (data) => {
    const {code, valor, dataCompra} = data;

    console.log("EBAA! Funcionou!", code, valor, dataCompra);

  } 


  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form ref={inputRef} onSubmit={handleSubmit}>
          <BoxWhite>
            <Menu>
              <Link to="/list-purchases"><Plinks>Lista de compras |</Plinks></Link> 
              <Link to="/cashback"><Plinks>Cashback |</Plinks></Link>              
              <Link to="/"><Plinks>Logout</Plinks></Link>         
            </Menu>
                        
            <Text>Cadastro de compras</Text>
            <Input name="code" placeholder="Digite o código: C00FXT" type="text" />
            <Input name="valor" placeholder="Valor do produto: 0.00" type="text" />
            <Input name="dataCompra" placeholder={`Data da compra: ${new Date().toLocaleDateString()}`} type="text" />
            <ButtonLeft type="submit">Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
      </Center>
    </Content>
  );
}

export default CadastrePurchases;