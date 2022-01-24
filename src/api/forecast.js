const API_BASE = "https://api.openweathermap.org/data/2.5/";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    return await req.json();
}

export default {
  getWeatherCurrent: async (latitude, longitude) => {
    return await basicFetch(`weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`);
  },
  getForecast3Hour5Day: async (latitude, longitude) => {
    return await basicFetch(`forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&cnt=17&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`);
  },
};