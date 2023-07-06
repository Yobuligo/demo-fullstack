import { Pool } from "pg";
import { error } from "../shared/utils/error";
import * as dotenv from 'dotenv'

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? error("Port not supported")),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
