const express = require('express');
const app = express();
const port = 3000;

app.get('/spaces', (req, res) => {
  return res.json([
    {
      name: null,
    },
  ]);
});
