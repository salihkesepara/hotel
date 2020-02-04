const express = require("express");
const app = express();
const path = require("path");

// app.use('/dist', express.static(path.join(__dirname, 'public')));
app.use(express.static("dist"));
const port = 3001;

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist/index.html")));

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
