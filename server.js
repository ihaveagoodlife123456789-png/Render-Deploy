import express from 'express';
import { pool } from './index.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');

        if(!result.ok || result.rows.length === 0) {
            throw new Error('Failed to fetch users');
        }
        res.send(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});