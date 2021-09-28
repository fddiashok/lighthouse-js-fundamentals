function range(start, end, step){
  let evenNumberArray = [];
  if (start > end || step <= 0 || start ==="" || end ===""|| step === ""){
    return [];
  }else
  {
    let i = start ;
    while(i <= end){
      evenNumberArray.push(i);
      i = i + step ;
    }
  }return evenNumberArray;
}
console.log(range(10, 30, 5));
console.log(range(0, 10, 2));
console.log(range(-5, 2, 3));