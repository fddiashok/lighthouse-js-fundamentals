function loopLh(range , multiples ,words){
  let startAt = range[0];
  let endAt = range[1];
  let mult1 = multiples[0];
  let mult2 = multiples[1];
  let string1 = words[0]
  let string2 = words[1];
  for (startAt; startAt <= endAt ;startAt ++){
    if(startAt % mult1 === 0 && startAt % mult2 === 0){
      console.log(string1+string2);
      }else if ( startAt % mult1 === 0 && startAt % mult2 !==0){
        console.log(string1);
      }else if (startAt % mult1 !== 0 && startAt % mult2 ===0){
        console.log(string2);
      }else console.log(startAt);
  }
}
loopLh([15, 90], [2, 5], ["Batty", "Beacon"]);
//loopLh([5, 90], [3, 4], ["Batty", "Beacon"]);