require('dotenv').config();
import mysql from 'mysql2';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
    });

    console.log('Connected to database');

    const { userId, txId } = req.body;
    const formattedTxId = `https://arweave.net/${txId}`;

    const sql = `INSERT INTO planitcontract_wordpress.uploads (upload_id, user_id, image_link) VALUES (NULL, ?, ?)`;
    const values = [userId, formattedTxId];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        res.status(500).json({ error: 'Error inserting data into MySQL' });
        return;
      }
      console.log('1 record inserted');
      res.status(200).json({ success: true });
    });

    connection.end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
