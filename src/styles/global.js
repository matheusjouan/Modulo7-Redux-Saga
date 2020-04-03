import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/back.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #191918 url(${background}) no-repeat center top;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}

`;
