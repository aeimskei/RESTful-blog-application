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


// Setup template
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The RESTful Blog App Server Has Started!");
});