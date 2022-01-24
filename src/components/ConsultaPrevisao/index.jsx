import React, { useState } from 'react';
import FormBusca from '../FormBusca';
import PrevisaoAtual from '../PrevisaoAtual';
import Previsao3Hours48Hours from '../Previsao3Hours48Hours';
import Previsao10Dias from '../Previsao10Dias';
import StateContext from '../../context/state';
import './style.css';

const ConsultaPrevisao = () => {
  const [localidade, setLocalidade] = useState({longitude:'', latitude: ''});
  const [show, setShow] = useState('');

  return(
    <section className="previsao-busca">
      <StateContext.Provider value={{localidade, setLocalidade, setShow}}>
        <FormBusca />
        { show ? <PrevisaoAtual /> : null }
        { show ? <Previsao3Hours48Hours /> : null }
        { show ? <Previsao10Dias /> : null }
      </StateContext.Provider>
    </section>
  );
}

export default ConsultaPrevisao;
