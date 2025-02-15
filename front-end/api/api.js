//Axios
//PARA RESPOSTAR COM PROMISE PRECISA USAR await
import "dotenv/config";
import axios from "axios";

//const { NODE_ENV } = process.env;
//const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

const URL = "https://deploy-jornada-full-stack-ow52.onrender.com/api";
const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

//console.log(responseArtist.data);
