const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
function finalPosition (moves){
  const cordinate = [0,0];
  for (const finalCordinates of moves ){
    if (finalCordinates === "north"){
      cordinate[1]++;
    }
    else if(finalCordinates === "south"){
      cordinate[1]--;
    }
    else if(finalCordinates === "east"){
      cordinate[0]++;
    }
    else if(finalCordinates === "west"){
      cordinate[0]--;
    }
  }
  return cordinate;
}
console.log(finalPosition(moves));