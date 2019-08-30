class Person {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }    introduceSelf() {
        console.log("Hi, I am " + this.name + "!");
    }
}
 
let personA = new Person("Sally");
 
personA.introduceSelf();

// Imprime "Hi, I am Sally!"
personA.name = "Mindy";
 
// Imprime "Hi, I am Mindy!" 
personA.introduceSelf();
