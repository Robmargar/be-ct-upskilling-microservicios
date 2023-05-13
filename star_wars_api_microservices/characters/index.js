const server = require("./src/server.js");

const PORT = 8001;

server.listen(8001, () => {
    console.log("characters service listening on port 8001");
});
