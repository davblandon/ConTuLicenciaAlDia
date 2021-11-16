const app = require("./app");
const mongoose = require("./src/conexDB/conn");
const port = 4000;


app.get('/', (req, res) =>{
  res.redirect("/login");
});

app.listen(port, () => {
  console.log("servidor corriendo ok");
});