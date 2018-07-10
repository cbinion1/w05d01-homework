const express = require('express');

const app = express();

const Fruits = require('./models/fruits');


app.get("/fruits", (req, res) => {
	res.render("index.ejs", {"fruitsList":Fruits})
});


app.get("/fruits/:index", (req, res) => {
	
	res.render("show.ejs", {fruit:Fruits[req.params.index]})
});



app.listen(3000, () => {
	console.log("Listening on port 3000!");

});