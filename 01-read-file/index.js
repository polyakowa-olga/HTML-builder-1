const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, 'utf8');

readStream.on('data', (chunk) => {
  let data = '';
  data += chunk;
  console.log(data);
});
