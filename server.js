const express = require('express');
const path = require('path');

const app = express();
const PORT = 4532;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.use((req, res) => {
  res.status(503).sendFile(path.join(__dirname, 'public', '503.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} and https://aaptfs.axisda.dev`);
});
