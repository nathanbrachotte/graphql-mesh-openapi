const express = require("express");
const app = express();
const port = 3111;

app.get("/spaces", (req, res) => {
  return res.json([
    {
      name: null,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
