const express = require('express'),
stylus = require('stylus'),
nib = require('nib')

let app =  express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set ("view engine", "pug");
app.use (stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render("index");
});	

app.listen(7000, () => {
  console.log('Example app listening on port 7000!')
});

