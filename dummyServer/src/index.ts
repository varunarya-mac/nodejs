import express from 'express';
const app = express();
const port = 8080;
var fs = require('fs');
const path = require('path');



app.get('/items', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  const itemsFilePath = path.join(__dirname, '/assets/items.json');
  fs.readFile(itemsFilePath, (fileErr: Error, result: any) => {
    if(fileErr) throw fileErr;

    var jsonData = JSON.parse(result.toString());
    res.json(jsonData);
});
});

app.post('/items', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json({status:"ok"})
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
