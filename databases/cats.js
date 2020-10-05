
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("cat", catSchema);
// ^ Cat will be created with a collection that is pluralized --> "cats"

var George = new Cat({
    name: "Floppy",
    age: 12,
    temperament: "Meaniepoo"
});

George.create();

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

Cat.find({})
.then(() => console.log(cats))
.catch(err => console.log(err));