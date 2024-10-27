import pg from "pg";
const { Pool } = pg;
import 'dotenv/config'; //importar variables de entorno

//Desestructuramos las variables de entorno
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env; 


//creamos el string para conectarnos a la base de datos
const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

//hacemos la conexión
export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString,
  });

  //verificamos que nos estamos conectando
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }


export default pool;