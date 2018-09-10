module.exports = reverseString;
function reverseString(word){
  if(word){
    return word.split("").reverse().join("")
  } else {
    return "";
  }
}
