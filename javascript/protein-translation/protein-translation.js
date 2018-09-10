module.exports = translate;
function translate(rna){
  let resultsArr=[];
  let rnaArr;
  if (!rna){
    return []
  } else {
   rnaArr= rna.match(/.{1,3}/g);
    breakme: for(var rna=0;rna<rnaArr.length;rna++){
    switch(rnaArr[rna]){
      case "AUG":
        resultsArr.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        resultsArr.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        resultsArr.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        resultsArr.push("Serine");
        break;
      case "UAU":
      case "UAC":
        resultsArr.push("Tyrosine");
        break;

      case "UGU":
      case "UGC":
        resultsArr.push("Cysteine");
        break;
      case "UGG":
        resultsArr.push("Tryptophan");
        break;

      case "UAA":
      case "UAG":
      case "UGA":
        break breakme;
      default:
        throw new Error('Invalid codon');
      }

  }
  return resultsArr
}
}
