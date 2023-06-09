import { useState } from "react";
import viteLogo from "/vite.svg";
import styled from "@emotion/styled";
import imagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";

const Heading = styled.h1`
font-family: 'Lato', sans-serif;
color: #fff;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom-50px;
font-size: 34px;

&::after{
  content: '';
  width: 150px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
  margin: 10px auto 0 auto;
  border-radius: 10px;
}

`;
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  return (
    <>
      <Container>
        <Imagen src={imagenCripto} alt="imagenCriptos" />

        <div>
          <Heading>Cotiza tus cryptos</Heading>
          <Formulario />
        </div>
      </Container>
    </>
  );
}

export default App;
