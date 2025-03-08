// src/database/db.ts
import { Sequelize } from "sequelize";
import "dotenv/config";

const database = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  dialectOptions: {
    ssl: process.env.DATABASE_URL?.includes("localhost")
      ? false
      : { rejectUnauthorized: false },
  },
});

const tryConnectSequelize = async () => {
  try {
    await database.authenticate();
    await database.sync({ logging: false });
    console.log("Conexão bem-sucedida");
  } catch (error) {
    console.error("Erro de conexão: ", error);
  }
};

export { tryConnectSequelize, database };
