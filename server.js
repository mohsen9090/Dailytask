const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Static file serving
app.use(express.static(path.join(__dirname, 'src'))); // تغییر به 'src'

// Endpoint for GitHub Webhook
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    
    // Check if the event is a push event
    if (req.body.action === 'push') {
        // Pull the latest changes from the repository
        exec('git pull origin main', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error pulling changes: ${stderr}`);
                return res.status(500).send('Error pulling changes');
            }
            console.log(`Changes pulled: ${stdout}`);
            res.status(200).send('Changes pulled successfully');
        });
    } else {
        res.status(400).send('Event not supported');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
