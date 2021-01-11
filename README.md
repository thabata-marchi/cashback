# App Cashback

Este repo se trata de um desafio frontend, onde crio uma aplicação de cashback. 
Foram criadas as seguintes features: 

- Criação de api fake com node e express autenticada. 
- Criação das telas de: 
    - Login, 
    - Registro de novo usuário*, 
    - Lista de compras do usuário,
    - Cadastro de nova compra*,
    - Visualização do total do cashback**

* A api não esta preparada para receber cadastros, por isso, as telas somente são estáticas com os campos validados com Yup.
** O total do cashback também é um valor estático

## Rodando a aplicação
Primeiro rode a aplicação seguindo o passo a passo abaixo: 

### Para rodar o front
Acesse a pasta: cashback/src e execute no terminal, os seguintes passos: 

```jsx
yarn install
yarn run dev
```

Depois rode a api, para que ambas rodem no mesmo local: http://localhost:3000.


### Para rodar a api
Para rodar a api, acesse a pasta: cashback/src/api/jwt e execute no terminal: 
```jsx
node index
```

### Rotas da aplicação

- ROTA: localhost:3000 (GET)
s
Resposta: 
```jsx
{
    "message": "Tudo ok por aqui!"
}
```

- LOGIN: localhost:3000/login (POST, params: user e pwd)

Respostas:
// Se user e pwd estiverem corretas:
```jsx
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxMDMwMzQ4MiwiZXhwIjoxNjEwMzAzNzgyfQ.y0yAk-2FvKSsetpUlP_zqbfr8QE4TLUfzyasB4pIWNg"
}
```

// Se user e senha estiverem incorreto: 
```jsx
{
    "message": "Login inválido!"
}
```

- REVENDEDORES: localhost:3000/resellers (GET, token)

Respostas: 

// Se token estiver expirado ou for inválido: 
```jsx
{
    "auth": false,
    "message": "Failed to authenticate token."
}
```


// Se token estiver ok:
```jsx
{
  "status": "sucesso",
  "resultado": {
    "users": [...]
```

### Observação!

Esta aplicação foi a primeira experiência que tive com backend. Estudei para este desafio e aprendi a criar a "api fake" em um final de semana, por isso, peço desculpas se o código backend não estiver muito bom :)