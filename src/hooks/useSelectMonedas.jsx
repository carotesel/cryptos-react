import React from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 25px 0;
    margin-top: 2rem;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`


const useSelectMonedas = (label, opciones) => {
  
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select>
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [SelectMonedas];
}

export default useSelectMonedas