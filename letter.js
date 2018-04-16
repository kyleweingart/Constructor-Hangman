// Creates a Letter Constructor


var Letter = function(character) {
    this.character = character;
    this.letterGuessedCorrectly = false;
    if (this.character == ' ')
    this.letterGuessedCorrectly = true;

}

  
Letter.prototype.printInfo = function() {
    if (this.letterGuessedCorrectly) {
        console.log("yep"); 
        return this.character;
    }
    return "_";
}
  
  
module.exports = Letter;



  