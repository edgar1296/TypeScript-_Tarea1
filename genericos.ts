function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length)
    return theArray[randomIndex];
}
 
let positions = [103, 458, 472, 458];
let randomPosition = randomElem(positions);
 console.log(randomPosition);

let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = randomElem(colors);
console.log(randomColor);