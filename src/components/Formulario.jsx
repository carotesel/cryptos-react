import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = () => {
    
    const monedas = [
        {id: 'ARS', nombre: 'Peso Argentino'},
        {id: 'USD', nombre: 'Dolar de Estados Unidos'},
        {id: 'EUR', nombre: 'Euro'},
        {id: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [SelectMonedas] = useSelectMonedas('Elegi tu moneda', monedas);

  return (
    <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario