var express = require('express')
var path = require('path')
var app = express()

// setting the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
    // rendering the ejs file
//    res.render('test.ejs')
   res.sendFile(path.join(__dirname+'/index.html'));

   // res.send("ssdsd")
})

app.listen(process.env.PORT || 3000)
