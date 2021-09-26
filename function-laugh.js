let numberoflaughs = "" ;
function laugh(num){
  for(let i = num ; i > 0 ; i--){
    numberoflaughs=numberoflaughs+"ha" ;
  }
  numberoflaughs=numberoflaughs + "!" ; 
  return numberoflaughs;
}
console.log(laugh(4));