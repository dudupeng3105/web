// https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array

var array = [];
fetch('subtitles3.txt')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
    console.log(data)
  	array.append(data)
  });



var fs = require('fs');
var array = fs.readFileSync('subtitles3.txt').toString().split("\n");

replaceInString = function(fullString, search, replacement) {
  return fullString.split(search).join(replacement);
};


console.log(array[2]);
for(i in array) {      
    obj = JSON.parse(array[i]);
    console.log(obj.text);
}