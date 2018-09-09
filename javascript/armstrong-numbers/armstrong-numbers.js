function validate(num){
  if (num<10){
    return true;
  } else {
  let length = num.toString().length;
  let numArr = num.toString().split("");
  // const reducer = ((accumulator, currentValue)) => accumulator + currentValue
  // return numArr.reduce(reducer)
  return numArr.map(x=>x**length).reduce((a,b)=>a+b) === num;
}
}
module.exports = {validate: validate};
