var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Sally");
personA.introduceSelf();
// Imprime "Hi, I am Sally!"
personA.name = "Mindy"; // No se puede modificar ya que no es publico
// Imprime "Hi, I am Mindy!" 
personA.introduceSelf();
