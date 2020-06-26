var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

var campgrounds = [
		{name: "Salmon Creek", image:"https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"},
		{name: "Granite Hill", image:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
		{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
]

app.get("/", function(req, res){
	// res.send("This will be the landing page soon")
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res){
// 	get data from form
// 	redirect back to campgrounds page
	var name = req.body.name
	var image = req.body.image
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground)
	res.redirect("/campgrounds")
})

app.get("/campgrounds/new", function(req, res){
	res.render("new")
})

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("YelpCamp Server started!");
});