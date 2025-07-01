const express = require('express');
const axios= require('axios');
const path = require('path');
const readFile = require('fs').promises;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Pokémon not found' });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App available on http://localhost:3000');
});