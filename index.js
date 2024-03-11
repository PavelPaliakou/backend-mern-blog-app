const express = require("express");
const cors = require("cors");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.send("/api", (request, response) => {
    response.send("Hello");
})

app.listen(5000, () => console.log("Server started on port 5000"));