
/**
 * Interface with the Pokedex API.
 *
 * Documentation is hosted here: https://pokedex-alchemy.herokuapp.com
 */

import { fetchOrReject } from './utils.js';

export const getColorSchemes = async () => {
  const res = await fetchOrReject(process.env.COLOR_API_URL + '/scheme');
  return res.json();
}; 

export const getAllColors = async (page, formData) => {
  const query = Array.from(formData.entries())
    .map(([k, v]) => `${k}=${v}`).join('&') + '&page' + page;
  const res = await fetchOrReject(`${process.env.COLOR_API_URL}?${query}`);
  return res.json();
};
