const fs = require("fs");
const { join } = require("path");
const path = require("path");

let filePath = path.join(__dirname, "secret-folder");

fs.readdir(filePath, (err, data) => {
  if (err) {
    console.log(err);
  }

  data.forEach((file) => {
    let pass = path.join(filePath, file);

    fs.readdir(pass, (err, data) => {
      if (err) {
      }
      if (!data) {
        fs.stat(pass, (err, stats) => {
          console.log(
            path.parse(file).name +
              " - " +
              [...path.extname(file)].splice(1).join("") +
              " - " +
              stats.size +
              "b"
          );
        });
      }
    });
  });
});
