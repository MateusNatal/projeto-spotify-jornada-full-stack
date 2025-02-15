import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://mateusnatal15731:mateusdaniel99@cluster0.t4sdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");

// console.log(db);
