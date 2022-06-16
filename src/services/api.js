import axios from 'axios'
import md5 from 'md5'

let ts = new Date().getTime()
const publicKey = process.env.REACT_APP_API_PUBLIC_KEY
const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
const hash = md5(ts + privateKey + publicKey)

export const resultAll = async () => {
  return await axios(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  )
}
export const resultBystring = async query => {
  return await axios(
    `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  )
}
