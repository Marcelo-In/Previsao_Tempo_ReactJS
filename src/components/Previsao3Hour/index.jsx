import React, { useEffect, useRef } from 'react';
import diaDaSemana from '../../utils/diaDaSemana';
import { getUrlIconWeather } from '../../utils/urlIcon';
import './style.css';

const Previsao3Hour = (previsao3Hour) => {
    const dataSelectRef = useRef(null);
    const diaDaSemanaSelectRef = useRef(null);

    useEffect(() => {
        if(previsao3Hour.previsao3Hour.main && previsao3Hour.previsao3Hour.weather){
            let data = new Date(previsao3Hour.previsao3Hour.dt_txt);
            let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            let semana = diaDaSemana(data.getDay()).split('-')[0];
            dataSelectRef.current.textContent = dataFormatada;
            diaDaSemanaSelectRef.current.textContent = semana;
        }
      }, [previsao3Hour]);

    return(
            <div className="coluna-3hours">
                <div className="coluna-3hours-conteudo">
                    <div className="coluna-3hours-datahora">
                        <span ref={dataSelectRef}></span>
                        <span ref={diaDaSemanaSelectRef}></span>
                        { previsao3Hour.previsao3Hour.dt_txt ? <span>{previsao3Hour.previsao3Hour.dt_txt.split(' ')[1]}</span> : null }
                        { previsao3Hour.previsao3Hour.weather ? <img src={getUrlIconWeather(previsao3Hour.previsao3Hour.weather[0].icon)} alt="Imagem clima"></img> : null }
                        { previsao3Hour.previsao3Hour.weather ? <span>{previsao3Hour.previsao3Hour.weather[0].description[0].toUpperCase() + previsao3Hour.previsao3Hour.weather[0].description.substr(1)}</span> : null }
                    </div>
                    { previsao3Hour.previsao3Hour.main ? <span>Máx.: {Math.round(previsao3Hour.previsao3Hour.main.temp_max)}°C / Mín.: {Math.round(previsao3Hour.previsao3Hour.main.temp_min)}°C</span> : null }
                    { previsao3Hour.previsao3Hour.main ? <span>Sensação: {Math.round(previsao3Hour.previsao3Hour.main.feels_like)}°C</span> : null }
                    { previsao3Hour.previsao3Hour.main ? <span>Umidade: {previsao3Hour.previsao3Hour.main.humidity}%</span> : null }
                    { previsao3Hour.previsao3Hour.main ? <span>Pressão: {previsao3Hour.previsao3Hour.main.pressure}</span> : null }
                    { previsao3Hour.previsao3Hour.wind ? <span>Vento: {Math.round(previsao3Hour.previsao3Hour.wind.speed * 3.6) } km/h</span> : null }
                </div>
            </div>
    );
}

export default Previsao3Hour;