const express = require('express'),
stylus = require('stylus'),
nib = require('nib'),
device = require('express-device')

let app =  express();
var cmpString = "desktop";
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
app.use(device.capture());
app.get('/', (req, res) => { 
   var deviceType = req.device.type;
   console.log ("DeviceType is " + deviceType); 
   if (  deviceType.toString() == "desktop" )
   {
      console.log("It is a desktop application!!!");
       res.render("index");
   }
   else
   {
      console.log("Its a mobile application")
      res.sendFile('MobileHome.html', { root: __dirname});
   }
});	

app.listen(7000, () => {
  console.log('Example app listening on port 7000!')
});

