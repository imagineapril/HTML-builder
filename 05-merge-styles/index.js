const fs = require('fs');
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const mergedStyles = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(stylesFolder, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    if (file.isFile() && path.extname(path.join(stylesFolder, file.name)) === '.css') {
      const input = fs.createReadStream(path.join(stylesFolder, file.name));
      input.on('data', (chunk) => mergedStyles.write(chunk));
    }
  });
});