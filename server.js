var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", "./views");
// index page 
app.get("/", function(req, res) {
    res.render("index");
});
app.get('/about', function(req, res){
    res.render('about');
});
app.get('/news', function(req, res){
    res.render('news');
});
app.get('/posts', function(req, res){
    res.render('posts');
});

