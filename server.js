const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint 1: para ver si funciona
app.get('/status', (req, res) => {
  res.json({ mensaje: "Servidor funcionando correctamente" });
});

// Endpoint 2: saludo
app.get('/saludo', (req, res) => {
  res.json({ saludo: "Hola! Bienvenido a mi API" });
});

// Endpoint 3: eco (te regresa lo que le mandes)
app.post('/eco', (req, res) => {
  res.json({ recibido: req.body });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
