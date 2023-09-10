import { MongoClient } from "mongodb";

// URL de conexão com o MongoDB
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const db = client.db("transactions");
export { client, db };
