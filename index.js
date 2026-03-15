const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/tatiana", (req, res) => {
  res.json({
    mensaje:
      "Hola, somos Tatiana Grajales y Juan David Grajales, estudiantes de Tecnología en Desarrollo de Software para Negocios Digitales.",
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
