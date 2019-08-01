const express = require('express');
const app = express();
const port = process.env.port || 8080;
app.get('/', (req, res) => {
  res.status(200).send('Hello Gurvesh Sidhu')
});
app.get('/random',(err,res) => {
    res.status(200).send(JSON.stringify(Math.random()))});

app.get('/sub',(err,res) => {
    res.status(200).send(JSON.stringify(Math.random() - Math.random()))});

 app.get('/multiply',(err,res) => {
    res.status(200).send(JSON.stringify(Math.random() * Math.random()))});

app.listen(port, () => {
  console.log('Connected on port 8080!')
});


//err not wrkng