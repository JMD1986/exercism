  var  PhoneNumber = function(number) {


  }
  PhoneNumber.prototype.number = function(number){
    let desired = number.replace(/[^\w\s]/gi, '').replace(/\s/g, "");
    if (desired.length < 10 || (desired.length > 11 && desired.split()[0] !== "1")){
      return null
    } else {
      return desired
    }
  }

module.exports = PhoneNumber;
