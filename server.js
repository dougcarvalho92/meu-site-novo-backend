const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const { MONGO_URL } = require("./src/services/config");
const PORT = process.env.PORT || 5000;

//INICIANDO APP
const app = express();

requireDir("./src/models");

//CONNENCT TO MONGODB
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json()); // PERMITIR QUE ENVIA DADOS EM JSON PARA APLICAÇÃO
app.use(cors());
app.use("/api", require("./src/routes"));
app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
