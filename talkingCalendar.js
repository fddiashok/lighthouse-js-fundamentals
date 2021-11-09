const talkingCalendar = function (date) {
  let array = date.split("/")
  //console.log(array); //[ '2017', '12', '02' ]
  let day = Number(array[2]);
  let month = Number(array[1]);
  let year = Number(array[0]);
  return (`${convertMonth(month)} ${convertDate(day)}, ${year}`);
};
const convertDate = function (day) {
  if (day == 1 || day == 21 || day == 31) {
    return (`${day}st`);
  }
  else if (day == 2 || day == 22) {
    return (`${day}nd`);
  }
  else if (day == 3 || day == 23) {
    return (`${day}rd`);
  }
  else return (`${day}th `)
};
const convertMonth = function (month) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for (let item of months) {
    if (months.indexOf(item) + 1 === month) {
      return item;
    }
  }

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*EXPECTED OUTPUT
December 2nd, 2017
November 11th, 2007
August 24th, 1987 */