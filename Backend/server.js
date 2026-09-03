import express from 'express';
import { pool } from './index.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');

        if(result.rows.length === 0) {
            return res.status(404).json({ error: 'Failed to fetch users' });
        }
        
        res.json(result.rows);
        console.log(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

const distPath = path.join(__dirname, '../Frontend/dist');
app.use(express.static(distPath));

app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
