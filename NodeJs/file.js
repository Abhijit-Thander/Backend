const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// sync
// fs.writeFile("./test.txt", "Hey from text");

// async
fs.writeFile("./test.txt", "Hey ........", () => {});
