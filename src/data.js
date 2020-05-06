import data from './data/lol/lol.js';
const lol = data.data;
export const orderByza = () => {
  let lolkeys = Object.keys(lol);
  lolkeys = lolkeys.reverse();
  return lolkeys;
};

export const orderByaz = () => {
  let lolkeys = Object.keys(lol);
  return lolkeys;
};

