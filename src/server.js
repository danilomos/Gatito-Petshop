const express = require("express");
const config = require("config");

const app = express();

app.use(express.json());

app.listen(config.get("port"), () => console.log(`Servindo ouvindo na porta: ${config.get("port")}`));