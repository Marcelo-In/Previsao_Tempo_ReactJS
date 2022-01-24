import React from 'react';
import ConsultaPrevisao from './components/ConsultaPrevisao';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {
  return (
    <div>
      <Typography variant="h4" component="h1" align="center">Consulta de Previsão do Tempo</Typography>
      <ConsultaPrevisao />
    </ div>
  );
}

export default App;
