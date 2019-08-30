function removeIt(theInput, theIt) {
    var theRegex = new RegExp(theIt, "gi");
    return theInput.replace(theRegex, '');
    /*replace da error ya que los "GENERICOS" solo funcionan con
    aplicables a todos los tipos de datos y no puede suponer
    que es tal tipo de dato
    */
}
