var express        = require("express"),
	app            = express(), 
	bodyParser     = require("body-parser"),
	mongoose       = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

// schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
// 	name: "Granite Hill", image:"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", description: "The best hill, made exclusively out of granite! How cool!"
// }).then((campground) => console.log("Newly Created Campground!", campground))
// .catch((err) => console.log(err))

app.get("/", function(req, res){
	// res.send("This will be the landing page soon")
	res.render("landing");
})

app.get("/campgrounds", function(req, res){
	Campground.find({})
	.then((allCampgrounds) => res.render("index", {campgrounds: allCampgrounds}))
	.catch((err) => console.log(err))
	// res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res){
// 	get data from form
// 	redirect back to campgrounds page
	var name = req.body.name
	var image = req.body.image
	var desc = req.body.description
	var newCampground = {name: name, image: image, description: desc}
	Campground.create(newCampground)
	.then(() => console.log("new campground created!"))
	.catch((err) => console.log(err))
	// campgrounds.push(newCampground)
	res.redirect("/campgrounds")
})

app.get("/campgrounds/new", function(req, res){
	res.render("new")
})

app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("show", {campground: foundCampground});
		}
	})
	// .then((foundCampground) => res.render("show", {campground: foundCampground}))
	// .catch((err) => console.log(err))

})

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("YelpCamp Server started!");
});