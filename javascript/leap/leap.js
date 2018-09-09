class Leap {
  isLeap(year) {
    if (year%4===0){
      if(year%100===0){
        return false
      }
    }
  }
}

export default Leap;
