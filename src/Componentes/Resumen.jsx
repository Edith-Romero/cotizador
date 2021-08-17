import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import {primerMayuscula} from './Helper'

const BoxResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color : #00838F;
    color:#FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const{marca,year,plan} = datos;

    if(marca=== '' || year === '' || plan === '') return null;

    return ( 
        <BoxResumen>
            <h1> Resumen de Cotizacion</h1>
            <ul>
                <li>Marca:{primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Ano del Auto:{year}</li>
            </ul>
        </BoxResumen>
     );
}
 
export default Resumen;
