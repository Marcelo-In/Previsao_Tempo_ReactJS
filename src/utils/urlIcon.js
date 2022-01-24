import openWeatherMapIconBaseUrl from "../constansts/HTTP";

export const getUrlIconWeather = (refIcon) => {
    if(refIcon){
        return `${openWeatherMapIconBaseUrl}${refIcon}.png`;
    }else{
        return '#';
    }
}

export const getUrlIconWeather2x = (refIcon) => {
    if(refIcon){
        return `${openWeatherMapIconBaseUrl}${refIcon}@2x.png`;
    }else{
        return '#';
    }
}

export const getUrlIconCondition = (refIcon) =>{
    if(refIcon){
        return `${openWeatherMapIconBaseUrl}${refIcon}.png`;
    }else{
        return '#';
    }
}
