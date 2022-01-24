import React, { useState, useEffect, useContext } from 'react';
import Hgbrasil from '../../api/hgbrasil';
import { Container, Typography } from '@material-ui/core';
import StateContext from '../../context/state';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import refIcon from '../../utils/refIcon';
import { getUrlIconCondition } from '../../utils/urlIcon';
import './style.css';

const Previsao3Hours48Hours = () => {
    const [previsao, setPrevisao] = useState([]);
    const [scrollX, setScrollX] = useState([0]);
    const { localidade } = useContext(StateContext);
    
    useEffect(() => {
        if(localidade.latitude && localidade.longitude){
            const loadForecast = async () => {
                let dadosPrevisao = await Hgbrasil.getForecast10Dias(localidade.latitude, localidade.longitude);
                if(dadosPrevisao.results.forecast !== undefined){
                    setPrevisao(dadosPrevisao.results.forecast);
                }
            };
            loadForecast();
        }
      }, [localidade]);

    const handleLeftArrow = () =>{
        let x = scrollX + 591;
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () =>{
          let x = scrollX - 591;
          if((window.innerWidth - 1970) > x){
            x = (window.innerWidth - 1970) - 120;
          }
          setScrollX(x);
    }

    return(
        <Container className="container-previsao10dias" component="article" maxWidth="lg">
            <Typography variant="h5" component="h2" align="center">Próximos 10 dias</Typography>
            <div className="colunas-previsao10dias--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="colunas-previsao10dias--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="colunas-previsao10dias" style={{marginLeft: scrollX}}>
                {previsao.map((item, key) => {
                    return (
                        <div key={key} className="coluna-10dias">
                            <div className="coluna-10dias-conteudo">
                                { item.date ? <span>{item.date}</span> : null }
                                { item.weekday ? <span>{item.weekday}</span> : null }
                                { item.condition && refIcon(item.condition) ? <img src={getUrlIconCondition(refIcon(item.condition))} alt="Imagem clima"></img> : null }
                                { item.max && item.min ? <span>{item.max}°C / {item.min}°C</span> : null }
                                { item.description ? <span>{item.description[0].toUpperCase() + item.description.substr(1)}</span> : null }
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Previsao3Hours48Hours;