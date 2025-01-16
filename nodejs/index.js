const fs = require("fs");

function copy_file(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file coppied");
  });
}

copy_file('./sample.txt','./copy_sample.txt')