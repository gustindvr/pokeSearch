import Axios from 'axios';

const baseUrl = 'https://pokeapi.co';

export const Api = Axios.create({
  baseURL: `${baseUrl}/api/`,
  timeout: 1000,
});
