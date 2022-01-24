const API_BASE = "https://api.hgbrasil.com/weather";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    return await req.json();
}

export default {
  getForecast10Dias: async (latitude, longitude) => {
    return await basicFetch(`?format=json-cors&key=${process.env.REACT_APP_HGBRASIL_API_KEY}&lat=${latitude}lon=${longitude}&user_ip=remote`);
  },
};