const express = require('express');
const sequelize = require('./config/databases');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint 1 base: para ver si funciona
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

//         GRUPO Informativos

app.get('/continue', (req, res) => {
  res.status(100).json({ info: "100 Continue: El cliente debe continuar con la solicitud" });
});

app.get('/switching-protocols', (req, res) => {
  res.status(101).json({ info: "101 Switching Protocols: Cambiando protocolo" });
});

//         GRUPO Éxito

app.get('/ok', (req, res) => {
  res.status(200).json({ success: "200 OK: Todo salió bien" });
});

app.post('/created', (req, res) => {
  res.status(201).json({ success: "201 Created: Recurso creado correctamente" });
});

app.get('/accepted', (req, res) => {
  res.status(202).json({ success: "202 Accepted: Solicitud aceptada, procesándose" });
});


//         GRUPO Redirecciones

app.get('/moved-permanently', (req, res) => {
  res.status(301).json({ redirect: "301 Moved Permanently: El recurso fue movido" });
});

app.get('/found', (req, res) => {
  res.status(302).json({ redirect: "302 Found: El recurso está en otra ubicación" });
});

app.get('/not-modified', (req, res) => {
  res.status(304).json({ redirect: "304 Not Modified: No ha cambiado el recurso" });
});

//     GRUPO Errores del Cliente

app.get('/bad-request', (req, res) => {
  res.status(400).json({ error: "400 Bad Request: La solicitud está mal formada" });
});

app.get('/unauthorized', (req, res) => {
  res.status(401).json({ error: "401 Unauthorized: Falta autenticación" });
});

app.get('/forbidden', (req, res) => {
  res.status(403).json({ error: "403 Forbidden: No tienes permisos" });
});

app.get('/not-found', (req, res) => {
  res.status(404).json({ error: "404 Not Found: El recurso no existe" });
});

app.get('/method-not-allowed', (req, res) => {
  res.status(405).json({ error: "405 Method Not Allowed: Método HTTP inválido" });
});


//     GRUPO Errores del Servidor

app.get('/internal-error', (req, res) => {
  res.status(500).json({ error: "500 Internal Server Error: Error interno en el servidor" });
});

app.get('/not-implemented', (req, res) => {
  res.status(501).json({ error: "501 Not Implemented: El servidor no soporta esta funcionalidad" });
});

app.get('/bad-gateway', (req, res) => {
  res.status(502).json({ error: "502 Bad Gateway: Respuesta inválida del servidor intermedio" });
});

app.get('/service-unavailable', (req, res) => {
  res.status(503).json({ error: "503 Service Unavailable: El servidor no está disponible" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});