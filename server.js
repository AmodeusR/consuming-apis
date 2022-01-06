const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json([
    {
      name: "Desidério",
      id: 1
    },
    {
      name: "Sera",
      id: 2
    }
  ]);
});

app.listen("4567");