//test
const express = require("express");

const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Hosting at: https://localhost:" + PORT);
});
app.use(express.static("public"));
