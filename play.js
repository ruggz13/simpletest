let fs = require("fs");
let converter = require("./mdconvert");

fs.readFile("md.txt", (err, data) => {
  converter.makeHTML(data);
});
