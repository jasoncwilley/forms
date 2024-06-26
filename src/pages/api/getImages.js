// pages/api/getImages.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  
  });

  try {
    const [rows] = await connection.execute('SELECT image_link FROM uploads WHERE user_id = 1');
    await connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
