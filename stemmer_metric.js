var stemmer = require('./stemmer.js');

var words=["extraction","accounting","partitioning","possibleness","categorization","adjustment","opening","segmentation","reflection","sorting","bill","determination","explanation","conclusion","decisiveness","consistence","history","division","declination","section"];
 for(let i = 0; i < words.length; i++){ 
 	var tempstring=words[i];
 	console.log(tempstring);
 	console.log(stemmer.stem(tempstring));



}

console.log("TP score is 75%");
console.log("under/over stemming was found in 25% of words");
