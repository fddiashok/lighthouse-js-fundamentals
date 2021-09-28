function lastIndexOf (someArray , value){
  let result = 0;
  let match = false;
  for (let i = 0 ; i < someArray.length ; i++){
    if(someArray[i] === value){
      result = i;
    match = true ;
      }
    }
    if(match == true){
      return result;
    }else return -1;    
  }
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
  console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
  console.log(lastIndexOf([], 3), "=?", -1);