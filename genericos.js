function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomElem(positions);
console.log(randomPosition);
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
console.log(randomColor);
