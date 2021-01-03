import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration:none;
      border: none;
      outline: none;
   }
   @font-face {
      font-family: 'Roboto';
      src: url('./fonts/Roboto.ttf');
   }
`