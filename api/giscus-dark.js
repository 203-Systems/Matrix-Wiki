const path = require('path');
const fs = require('fs');

export default (req, res) => {
  const cssPath = path.join(__dirname, '../src/css/giscus-dark.css');
  fs.readFile(cssPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading giscus-dark.css');
      return;
    }
    res.setHeader('Content-Type', 'text/css');
    res.send(data);
  });
};