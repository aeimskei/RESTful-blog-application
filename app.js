var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
    
// ============ APP CONFIG ======================
    
// Connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});

// To leave out typing ejs
app.set("view engine", "ejs");

// For custom style sheets
app.use(express.static("public"));

// Tell express to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// ============ MONGOOSE/MODEL CONFIG ================

// SCHEMA SETUP
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

// Compile the Blog Model
var Blog = mongoose.model("Blog", blogSchema);

// ============ RESTful ROUTES ======================

// INDEX Route - shows all blog posts

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW Route - form to create new blog post

app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE Route

app.post("/blogs", function(req, res){
   // create blog
   Blog.create(req.body.blog, function(err, newBlog){
       if (err){
           res.render("new");
       } else {
           // then, redirect to the index
           res.redirect("/blogs");
       }
   });
});

// Setup template
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The RESTful Blog App Server Has Started!");
});