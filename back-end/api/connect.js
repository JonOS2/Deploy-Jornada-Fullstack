import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jonathaosprg:130680Jon@banco.rlqft.mongodb.net/?retryWrites=true&w=majority&appName=Banco";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollections = await db.collection("songs").find({}).toArray();



// console.log(songCollections);
