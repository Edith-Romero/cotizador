import React, {Fragment, useState} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Resumen from './Componentes/Resumen';
import Resultado from './Componentes/Resultado'
import styled from '@emotion/styled';
import Spinner from './Componentes/Spinner'



const Box = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const BoxFormulario = styled.div`
  background-color: #FFF;
  padding:  3rem;
  /* border: solid black; */
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year: '',
      plan:''
    }
  });

  const {cotizacion, datos} = resumen;

  const [cargando,setCargando] = useState (false)

  return (
    <Box>
      <br/>
        <Header
          titulo = 'Cotizador de Seguros'
        />
        <BoxFormulario>
          <Formulario
            setResumen={setResumen}
            setCargando = {setCargando}
          />
          {cargando ? <Spinner/> : null}
          
          {/* {!cargando ?  
            <Resumen
              datos={datos}
            />
            : null
          } */}
          
          {!cargando ?
            <Fragment>
              <Resumen
                datos={datos}
              />
              <Resultado
                cotizacion={cotizacion}
                setCargando = {setCargando}
              /> 
            </Fragment>
            :null
          }
        </BoxFormulario>
    </Box>
    );
}

export default App;
