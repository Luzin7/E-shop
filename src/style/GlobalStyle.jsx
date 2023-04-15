import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #FFF9CA;
}

.btn{
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-icon{
  cursor: pointer;
  border: none;
  outline: none;
  transition: transform 0.1s;
}

.btn-icon:hover{
  transform: scale(1.4)
}

.btn-icon:active{
  color: #b2a4ff;
  ;
}
`;
