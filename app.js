const express = require('express');
const app = express();
const port = 3000; 
const fs = require('fs');
const path = require('path');

// Endpoint de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon service Express !');
});

// Endpoint pour lire les données à partir du fichier JSON
app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    
    // Lecture du fichier JSON
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la lecture des données');
        return;
      }
  
      // Conversion des données JSON en objet JavaScript
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });
// Écoute du port
app.listen(port, () => {
  console.log(`Le service est disponible sur http://localhost:${port}`);
});
