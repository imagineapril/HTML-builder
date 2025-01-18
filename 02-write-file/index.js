const fs = require("fs");
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, "destination.txt"), 'utf-8');
const {stdin, stdout} = process;
stdout.write("Type something you want to save!\n");
stdin.on("data", (data) =>  {
  if (data.toString().trim() === "exit")  {
    output.end();
    process.exit();
  } else  {
    output.write(data);
  }
})

process.on("exit", () =>  {
  stdout.write("Your note is saved!")
})