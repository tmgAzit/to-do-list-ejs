// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const items = ['Buy food', 'Cook food', 'Eat food'];
app.get('/', function (req, res) {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-US', options);
  res.render('list', { kindOfDay: day, newListItems: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;

  items.push(item);
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Server started on port 3000.');
});
