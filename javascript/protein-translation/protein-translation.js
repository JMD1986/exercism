module.exports = translate;
function translate(rna){
  let resultsArr=[];
  let rnaArr;
  if (!rna){
    return []
  } else {
   rnaArr= rna.match(/.{1,3}/g);
    breakme: rnaArr.forEach(rna=>{
     if(rna==="AUG"){
      resultsArr.push("Methionine")
    } else if (rna=== "UUU"||rna=== "UUC"){
        resultsArr.push("Phenylalanine")
    } else if (rna==="UUA"||rna=== "UUG"){
        resultsArr.push("Leucine")
    } else if (rna==="UCU" ||rna=== "UCC"||rna=== "UCA"||rna=== "UCG" ){
        resultsArr.push("Serine")
    } else if (rna==="UAU"||rna=== "UAC"){
        resultsArr.push("Tyrosine")
    } else if (rna==="UGU"|| rna=== "UGC"){
        resultsArr.push("Cysteine")
    } else if (rna==="UGG"){
        resultsArr.push("Tryptophan")
    } if (rna==="UAA"|| rna=== "UAG"||rna=== "UGA"){
        //we want to exit the loop if these conditions are met
        return resultsArr;
    } else {
        return new Error('Invalid codon');
    }
  })
  return resultsArr
}
}
