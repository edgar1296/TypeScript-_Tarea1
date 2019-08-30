class Person {
    private name: string; //Ponemos la variable en privado
    constructor(theName: string) {
        this.name = theName;
    }    introduceSelf() {
        console.log("Hi, I am " + this.name + "!");
    }
}
 
let personA = new Person("Sally");
 
personA.introduceSelf();

// Imprime "Hi, I am Sally!"
personA.name = "Mindy"; // No se puede modificar ya que no es publico
 
// Imprime "Hi, I am Mindy!" 
personA.introduceSelf();
