function anagram(word, array){
  function reword(word){
    return word.split("").sort().join("")
  }
   return array.map(x=>reword(x)).filter(x=>x===reword(word))
}
