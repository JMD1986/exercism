/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}

  if(message===message.toUpperCase()){
    return 'Whoa, chill out!';
    } else if (message.includes("?")){
      return 'Sure.';
    } else {
    return "Whatever.";
  }
  }
