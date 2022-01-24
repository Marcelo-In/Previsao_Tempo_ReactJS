const API_BASE = "http://api.positionstack.com/v1/";

const basicFetch = async (endpoint) => {
    const url = API_BASE.concat(endpoint);
    const req = await fetch(url);
    return await req.json();
}

export default {
  getGeolocation: async (cidade, uf) => {
    return await basicFetch(`forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&query=${cidade},${uf}&country=BR`);
  },
};
