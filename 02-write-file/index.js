const fs = require("fs");
const path = require("path");
const readline = require('readline');

let filePath = path.join(__dirname, "text.txt");

const { stdin, stdout } = process;

stdout.write("Hi! Enter your text\n");

fs.writeFile(filePath, "", (error) => {
  error ? console.log(error) : null;
});

stdin.on("data", (data) => {
  if (data.toString().trim() === "exit") {
    stdout.write("Bye!");
    process.exit();
  } else {
    fs.appendFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
});
process.on("SIGINT", () => {
  console.log("Bye!");
  process.exit();
});
