//generates a random string of letters of whatever link given
// function generateRandom(num){

//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("").sort()
//   let randomArray = []
//     for (i=0;i<num;i++){
//        let randomIndex = Math.floor(Math.random() * 26)
//       randomArray.push(alphabet[randomIndex])
//     }
//     return randomArray.join("")
// }

// // the following code offsets the string given by the key. it is incredibly messy but
function shift(str,key){

function returnOffset(x){
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("").sort()

  let alphOb = Object.assign({}, alphabet);
function getOffset(key){
return key.slice(0,1)
}
let key = getOffset(x)
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

amount = getKeyByValue(alphOb,key)
return parseFloat(amount)
}
amount =returnOffset(key)

  let string = str.replace(/\s/g, "")
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("").sort()

  let alphOb = Object.assign({}, alphabet);
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  function addOffset(amount, numArray){
    return numArray.map(x=>{
      let shiftedAmount = parseFloat(x)+amount
      if (shiftedAmount > 25){
        return (shiftedAmount-26).toString()
      } else {
      return shiftedAmount.toString()
      }
    })
  }
    let results = []
  string.split("").map(x=>{
    results.push(getKeyByValue(alphOb, x))
  })
  let offSetIndex= addOffset(amount, results)
  let shiftedResults = [];
  offSetIndex.forEach(x=>{
  shiftedResults.push(alphOb[x])
  })
  return shiftedResults.join("");
}
//the folling code unshifts an encoded string when given the string and amount

function unShift(str,amount){
  let string = str.replace(/\s/g, "")
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("").sort()

  let alphOb = Object.assign({}, alphabet);
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  function removeOffset(amount, numArray){
    return numArray.map(x=>{
      let shiftedAmount = parseFloat(x)-amount
      if (shiftedAmount < 0){
        return (shiftedAmount+26).toString()
      } else {
      return shiftedAmount.toString()
      }
    })
  }
    let results = []
  string.split("").map(x=>{
    results.push(getKeyByValue(alphOb, x))
  })
  let offSetIndex= removeOffset(amount, results)
  let shiftedResults = [];
  offSetIndex.forEach(x=>{
  shiftedResults.push(alphOb[x])
  })
  return shiftedResults.join("");
}
