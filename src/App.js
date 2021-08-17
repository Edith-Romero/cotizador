import React, {useState} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Resumen from './Componentes/Resumen';
import Resultado from './Componentes/Resultado'
import styled from '@emotion/styled';


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

  return (
    <Box>
      <br/>
        <Header
          titulo = 'Cotizador de Seguros'
        />
        <BoxFormulario>
          <Formulario
            setResumen={setResumen}
          />
          <Resumen
          datos={datos}
          />
          <Resultado
          cotizacion={cotizacion}
          />
        </BoxFormulario>
    </Box>
    );
}

export default App;
