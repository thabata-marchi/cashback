import React, { useState, useContext, useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { store } from '../../store';
import api from '../../api/api';

import { Form } from '@unform/web';
import { Link, useHistory } from "react-router-dom";
import GrupoBoticario from '../../assets/images/logo-grupo.png';
import { Content } from './styles';
import { Center, BoxWhite, Logo, Plinks, Menu } from '../../assets';
import ButtonLeft from '../../components/Buttons/ButtonLeft';
import Input from '../../components/Input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const history = useHistory();
  const globalStore = useContext(store);
  const { setToken, token } = globalStore;
  const inputRef = useRef(null);
  
  const [saveToken, setSaveToken] = useState(token);
  console.log(token);

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

      connectAuth(data);

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
  
  const connectAuth = useCallback(async (data) => {
    const {email, password} = data;
    try {
      const response = await api.AuthLogin(email, password);
      setToken(response.data.token);      
      setSaveToken(token);

      if (response.status === 200) {
        if(token === saveToken) return history.push("/list-purchases") 
      }

    } catch (e){
      console.log(e);   
      toast.dark("🦄  Ops! Deu ruim :( Tente novamente, por favor.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });   
    }
  },[token, history, saveToken, setToken])

  return (
    <Content>
      <Center>
        <Logo src={GrupoBoticario} alt="Logo Grupo Boticário" />
        <Form ref={inputRef} onSubmit={handleSubmit}>
          <BoxWhite>
            <Menu>
              <Link to="/register"><Plinks>Cadastre-se</Plinks></Link>         
            </Menu>                      
            <Input name="email" type="email" label="E-mail" placeholder={"seuemail@empresa.com.br"} />
            <Input name="password" type="password" label="Senha" placeholder={"*******"} />
            <ButtonLeft type="submit">Entrar</ButtonLeft>
          </BoxWhite>
        </Form>
        <ToastContainer />
      </Center>
    </Content>
  );
}

export default Login;