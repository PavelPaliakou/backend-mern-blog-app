const express = require("express");
const cors = require("cors");
const blogRouter = require("./route/blog-route");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.send("/api", (request, response) => {
    response.send("Hello");
})

app.listen(5000, () => console.log("Server started on port 5000"));