import axios from 'axios';
import md5 from 'md5';

let ts = new Date().getTime();
const publicKey = '56828f7f3659e97c7cf9f6483c651af3';
const privateKey = 'ce06a5be25f3f6f20d114aa3f2cec1d2b0bdaf8f';
const hash = md5(ts + privateKey + publicKey);

export const resultAll = async () => {
  return await axios(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash.toString()}`
  );
};
export const resultBystring = async (query) => {
  return await axios(
    `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash.toString()}`
  );
};
