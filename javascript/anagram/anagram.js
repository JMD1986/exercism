var anagram = function( word ) { return new Anagram(word); };

function Anagram(word){
  this.word = word;
}
Anagram.prototype.matches = function(array){
  function reword(word){
    return word.split("").sort().join("")
  }
   return array.filter(x=>reword(x)===reword(word))
}

module.exports = anagram;
