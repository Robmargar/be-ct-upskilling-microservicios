const server = require("./src/server");

const PORT = 8002;

server.listen(PORT, () => {
    console.log("Planets listening at port 8002");
});