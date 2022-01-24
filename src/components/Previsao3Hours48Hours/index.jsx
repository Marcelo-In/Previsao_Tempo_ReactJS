import React, { useState, useEffect, useContext } from 'react';
import Previsao3Hour from '../Previsao3Hour';
import Forecast from '../../api/forecast';
import { Container, Typography } from '@material-ui/core';
import StateContext from '../../context/state';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './style.css';

const Previsao3Hours48Hours = () => {
    const [previsao, setPrevisao] = useState([]);
    const [scrollX, setScrollX] = useState([0]);
    const { localidade } = useContext(StateContext);
    
    useEffect(() => {
        if(localidade.latitude && localidade.longitude){
            const loadForecast = async () => {
                let dadosPrevisao = await Forecast.getForecast3Hour5Day(localidade.latitude, localidade.longitude);
                if(dadosPrevisao.list !== undefined){
                    setPrevisao(dadosPrevisao.list);
                }
            };
            loadForecast();
        }
      }, [localidade]);

    const handleLeftArrow = () =>{
        let x = scrollX + 636;
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () =>{
          let x = scrollX - 636;
          if((window.innerWidth - 3604) > x){
            x = (window.innerWidth - 3604) - 120;
          }
          setScrollX(x);
    }

    return(
        <Container className="container-previsao3hours48hours" component="article" maxWidth="lg">
            <Typography variant="h5" component="h2" align="center">3 em 3 horas</Typography>
            <div className="colunas-previsao--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="colunas-previsao--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="colunas-previsao" style={{marginLeft: scrollX}}>
                {previsao.map((item, key) => {
                    return (
                        <Previsao3Hour key={key} previsao3Hour={item} />
                    );
                })}
            </div>
        </Container>
    );
}

export default Previsao3Hours48Hours;