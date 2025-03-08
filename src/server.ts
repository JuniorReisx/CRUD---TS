import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { tryConnectSequelize } from "./database/db";
import routesUser from "./routes/user.routes";
import User from "./models/user.model";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

const startServer = async () => {
  try {
    await tryConnectSequelize();
    await User.sync();

    console.log("Banco de dados conectado e tabelas criadas com sucesso!");

    server.use("/", routesUser);

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
