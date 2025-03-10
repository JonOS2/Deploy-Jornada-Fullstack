import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL ="http://localhost:3001/api";
const URL ="https://deploy-jornada-fullstack-3g5g.onrender.com/api";

const resArtists = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;

console.log(resArtists.data);
console.log(resSongs.data);
