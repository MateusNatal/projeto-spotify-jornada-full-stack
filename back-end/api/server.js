// API
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update, Delete

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { db } from "./connect.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só iremos trabalhar com os endpoints '/artists' e '/songs' ");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});
const frontEndPath = path.join(__dirname, "../../front-end/dist");

app.use(express.static(frontEndPath));

app.get("*", (request, response) => {
  response.sendFile(path.join(frontEndPath, "index.html"));
});

console.log("Caminho do diretório front-end/dist:", frontEndPath);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
