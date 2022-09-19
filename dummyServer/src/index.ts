import express from 'express';
const app = express();
const port = 8080;
var fs = require('fs');
const path = require('path');



app.get('/getItems', (req, res) => {
  
  const itemsFilePath = path.join(__dirname, '/assets/items.json');
  fs.readFile(itemsFilePath, (fileErr: Error, result: any) => {
    if(fileErr) throw fileErr;

    var jsonData = JSON.parse(result.toString());
    console.log(JSON.parse(result.toString()));
    res.json(jsonData);
});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
