const express = require('express');

const app = express();


const superheroes = ["Superman", "Aquaman", "Mantaman", "Any other stupid DC character that sucks"];

app.get('/superheroes', (req, res) => {
	res.send(superheroes);
})


app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index]);
})









app.listen(3000, () => {
	console.log("Here to save the day....");

})



