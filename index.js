//imPORTnessecary modules
const express = require("express");
const app = express();
const http = require("http");

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const cors = require("cors");

//ImPORTplayers modules
const playerRoutes = require("./routes/players");
const authRoutes = require("./routes/auth");

app.use("/players", playerRoutes);
app.use("/auth", authRoutes);

//Set app to use above modules
app.use(bodyParser.json()); // supPORTjson encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // supPORTencoded bodies
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
}) 

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.get("/auth", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.get("/players", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//Start app,listen on PORT3030
server.listen(PORT, () => {
  console.log(`Example app listening on PORT: ${PORT}`);
});

module.exports = { io };
