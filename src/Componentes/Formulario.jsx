import Raact, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, calcularMarca,obtenerPlan} from '../Componentes/Helper';

const Campo = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex:  0 0 100px;
`;

const Select =styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    /* Le quita la apariencia de select y le puedo agregar caracteristica */
`;

const InputRadio= styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color.3s ease;
    margin-top: 2rem;

    &:hover {
        background-color:#26C6DA;
        cursor: pointer;
}
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;


const Formulario = ({setResumen}) => {

    const [datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    });
 
    const [error,setError] = useState(false);

    // Extraer datos del State
    const {marca, year,plan} = datos;


    const obtenerDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
        }

    //  Cuando el usuario da submit a cotizar
    const cotizarFormulario = (e)=>{
        e.preventDefault();

        if(marca.trim () === '' || year.trim() === '' || plan.trim() === '')
        {
            setError(true);
            return; 
        }  

        setError(false);
  

        // Monto Minimo inicial del alquiler

        let resultado = 2000;

        // Obtener la diferencia de anos
        
        const diferencia = obtenerDiferenciaYear(year);

        // Calcula el resultado - el importe segun el ano

        resultado -= ((diferencia * 3) * resultado) / 100;

        // console.log(diferencia);
        // console.log(resultado);


        // americano 15
        // asiatico 5%
        // europeo 30%

        resultado = calcularMarca(marca) * resultado;

        // Basico aumento 20%
        // Completo 50%
    
        const incrementarPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementarPlan * resultado).toFixed(2);
        console.log(resultado);

        // total
        setResumen ({
            cotizacion: resultado, 
            datos
        })
 
}


        
    return (           
        <form 
        onSubmit={cotizarFormulario}
        >
            {error ? <Error>Todos los Campos son Obligatorios</Error>:null}
            <Campo>
                <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerDatos}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="Americano">Americano</option>
                        <option value="Europeo">Europeo</option>
                        <option value="Asiatico">Asiatico</option>
                    </Select>
            </Campo>
            <Campo>
                <Label>Anos</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtenerDatos}
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    </Select>
            </Campo>
            <Campo>
                <Label>Plan: </Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="Basico"
                    checked={plan === "Basico"}
                    onChange={obtenerDatos}
                /> Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="Completo"
                    checked={plan === "Completo"}
                    onChange={obtenerDatos}
                /> Completo
            </Campo>
            <Boton
             type="submit">
                Cotizar
            </Boton>
        </form> 
    );
}
 
export default Formulario