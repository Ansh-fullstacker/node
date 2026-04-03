const express = require('express');
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("🚀 Server chal raha hai bhai!");
});

// About route
app.get('/about', (req, res) => {
    res.send("This is About Page");
});

// API route
app.get('/api', (req, res) => {
    res.json({
        message: "API working 🔥",
        name: "Ansh",
        status: "Success"
    });
});

// POST route (PRO LEVEL 🔥)
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: "Data received successfully",
        receivedData: data
    });
});

// New feature (ansh branch)
app.get('/ansh', (req, res) => {
    res.send("🔥 ANSH branch advanced feature!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});