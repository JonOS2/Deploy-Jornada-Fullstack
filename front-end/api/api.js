import axios from "axios";

const URL = "http://localhost:3001";

const resArtists = await axios.get(`${URL}/artists`)
const resSongs = await axios.get(`${URL}/songs`)

export const artistArray = resArtists.data
export const songsArray = resSongs.data

console.log(resArtists.data)
console.log(resSongs.data)