const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";
export const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = res.json();
  return data;
};
