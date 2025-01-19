const fs = require('fs');
const path = require('path');
const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder, {withFileTypes: true}, (err, files) =>  {
  files.forEach((file) =>  {
    fs.stat(path.join(__dirname, 'secret-folder', `${file.name}`), (err, stats) => {
      let fileAndExt = file.name.split('.').join(" - ");
      console.log(fileAndExt + " - " + (stats.size/1024).toFixed(2) + ' kB');
    })
  })
});