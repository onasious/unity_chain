// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'UnityChain',
    password: '12345',
    port: 5432,
});
pool.connect();

app.use(cors());
app.use(bodyParser.json());

app.post('/inventory', async (req, res) => {
    const { item, code, units, quantity, sellingPrice, purchasePrice } = req.body;

    const query = `
        INSERT INTO inventory (item, code, units, quantity, sellingPrice, purchasePrice)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;

    const values = [item, code, units, quantity, sellingPrice, purchasePrice];

    try {
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: err.message });
    }
});

app.get('/inventory', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: err.message });
    }
});

app.put('/inventory/:id', async (req, res) => {
    const id = req.params.id;
    const { item, code, units, quantity, sellingPrice, purchasePrice } = req.body;

    const query = `
        UPDATE inventory
        SET item = $1, code = $2, units = $3, quantity = $4, sellingPrice = $5, purchasePrice = $6
        WHERE id = $7
        RETURNING *;
    `;

    const values = [item, code, units, quantity, sellingPrice, purchasePrice, id];

    try {
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: err.message });
    }
});

app.delete('/inventory/:id', async (req, res) => {
    const id = req.params.id;

    const query = 'DELETE FROM inventory WHERE id = $1';

    try {
        await pool.query(query, [id]);
        res.status(204).end();
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
