import React, { useState, useContext, useEffect, useRef } from 'react';
import Forecast from '../../api/forecast';
import StateContext from '../../context/state';
import diaDaSemana from '../../utils/diaDaSemana';
import { Container } from '@material-ui/core';
import { getUrlIconWeather2x } from '../../utils/urlIcon';
import './style.css';

const PrevisaoAtual = () => {
    const [previsaoAtual, setPrevisaoAtual] = useState([]);
    const { localidade } = useContext(StateContext);
    const dataAtualSelectRef = useRef(null);

    useEffect(() => {
        if(localidade.latitude && localidade.longitude){
            const loadForecast = async () => {
                let dadosPrevisao = await Forecast.getWeatherCurrent(localidade.latitude, localidade.longitude);
                if(dadosPrevisao.weather !== undefined && dadosPrevisao.main !== undefined){
                    setPrevisaoAtual(dadosPrevisao);
                }
            };
            loadForecast();
        }
      }, [localidade]);

      useEffect(() => {
        if(previsaoAtual.main && previsaoAtual.weather){
            let dataAtual = new Date();
            let dataFormatada = dataAtual.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            let semana = diaDaSemana(dataAtual.getDay());
            let hora = dataAtual.getHours();
            dataAtualSelectRef.current.textContent = semana + ', ' + dataFormatada + ' - ' + hora + ':00';
        }
      }, [previsaoAtual]);

    return(
        <Container className="container-previsaoatual" component="article" maxWidth="md">
        <div className="previsao-atual">
            <div className="col-weather">
                <div className="col-weather-img">
                    { previsaoAtual.weather ? <img className="img-weather-atual" src={getUrlIconWeather2x(previsaoAtual.weather[0].icon)} alt="Imagem clima"></img> : null }
                </div>
                <div className="col-temp">
                    { previsaoAtual.main ? <span className="col-temp-valor">{Math.round(previsaoAtual.main.temp)}</span> : null }
                    { previsaoAtual.main ? <span className="col-temp-escala">°C</span> : null }
                </div>
            </div>
            <div className="col-dados">
                { previsaoAtual.main ? <span>Umidade do ar: {previsaoAtual.main.humidity}%</span> : null }
                { previsaoAtual.main ? <span>Pressão atmosférica: {previsaoAtual.main.pressure}</span> : null }
                { previsaoAtual.wind ? <span>Velocidade do vento: {Math.round(previsaoAtual.wind.speed * 3.6, -2)} km/h</span> : null }
                { previsaoAtual.main ? <span>Sensação térmica: {Math.round(previsaoAtual.main.feels_like)}°C</span> : null }
            </div>
            <div className="col-clima">
                { previsaoAtual.main ? <span className="col-clima-datahora" ref={dataAtualSelectRef}></span> : null }
                { previsaoAtual.main ? <span>Máx.: {Math.round(previsaoAtual.main.temp_max)}°C / Mín.: {Math.round(previsaoAtual.main.temp_min)}°C</span> : null }
                { previsaoAtual.weather ? <span>{previsaoAtual.weather[0].description[0].toUpperCase() + previsaoAtual.weather[0].description.substr(1)}</span> : null }
            </div>
        </div>
      </Container>
    );
}

export default PrevisaoAtual;