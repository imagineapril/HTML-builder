const fs = require('fs');
const path = require('path');

const srcFolder = path.join(__dirname, 'files');
const destFolder = path.join(__dirname, 'files-copy');

fs.readdir(srcFolder, (err, files) => {
  for (let file of files) {
    fs.cp(path.join(srcFolder, file), path.join(destFolder, file), () => {});
  }
});