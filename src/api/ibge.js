const API_BASE = "https://servicodados.ibge.gov.br/api/v1/localidades/";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  return await req.json();
};

export default {
  getUfList: async () => {
    return await basicFetch(`estados?orderBy=nome`);
  },
  getCidadeList: async (uf) => {
    return await basicFetch(`estados/${uf}/municipios?orderBy=nome`);
  },
};
