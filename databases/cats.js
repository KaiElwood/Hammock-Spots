var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect( "mongodb://localhost/cat_app")


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
// ^ Cat will be created with a collection that is pluralized --> "cats"

var George = new Cat({
    name: "Filch",
    age: 2,
    temperament: "Mean"
});

// George.save(function(err, cat){
//     if (err){
//         console.log("SOMETHIG WENT BAD");
//     } else {
//         console.log("We Saved the cat to the db!");
//         console.log(cat);
//     }
// });

// add data to db

// retrieve all cats from db

Cat.find({}, function(err, cats){
    if (err){
        console.log("SOMETHIG WENT BAD");
        console.log(err)
    } else {
        console.log("Cats! Lots of them!");
        console.log(cats);
    }
})