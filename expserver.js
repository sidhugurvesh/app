const express = require('express');
const app = express();
const port = process.env.port || 8080;

//serve the static files
app.use(express.static(__dirname + '/public'));

//set the view engine
app.set('view engine', 'ejs');

//path for views
app.set('views', './src/views');


app.get('/', (req, res) => {
  res.render('home')
});

app.listen(port, () => {
  console.log('Connected on port 8080!')
});
