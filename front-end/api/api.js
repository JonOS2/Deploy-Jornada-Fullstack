import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

const resArtists = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;

console.log(resArtists.data);
console.log(resSongs.data);
