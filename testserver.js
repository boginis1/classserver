const http = require("http");
const PORT = 7000;
const handleRequest = (req, res) =>
    res.end("I am good enough, smart enough ", + req.url);

const server = http.createServer(handleRequest);
server.listen(PORT, () =>
    console.log("server is listening on: " + PORT));


const PORTTWO = 7500;
const secondHandleRequest = (req, res) =>
    res.end("I am evil ", + req.url);

const serverTwo = http.createServer(secondHandleRequest);
serverTwo.listen(PORTTWO, () =>
    console.log("server is listening on: " + PORTTWO));