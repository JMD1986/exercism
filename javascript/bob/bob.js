/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  function hasLetters(str) {
    return ((/[a-z]/i).test(str));
}
function isQuestion(message){
  let trim= message.trim()
  return trim.split("")[trim.length-1]==="?"
}
function isShouting(message){
  return message===message.toUpperCase() && hasLetters(message)
}

function isSilent(message){
 return  message.trim()==="";
}

  if(isShouting(message) && !isQuestion(message)){
    return 'Whoa, chill out!';
    } else if (isQuestion(message) && !isShouting(message)){
      return 'Sure.';
    } else if (isSilent(message)){
      return 'Fine. Be that way!';
    } else if (isShouting(message) && isQuestion(message)){
      return 'Calm down, I know what I\'m doing!';
    } else {
    return "Whatever.";
  }
  }
