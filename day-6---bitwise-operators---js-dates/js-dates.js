function getDayNameOne(dateString) {
  const DATE = new Date(dateString);
  const OPTIONS = {
    weekday: 'long'
  };
  return new Intl.DateTimeFormat('en-Us', OPTIONS).format(DATE);
}

function getDayNameTwo(dateString) {
  const DAY = new Date(dateString);
  const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return WEEK_DAYS[DAY.getDay()];
}

// date format MM/DD/YYYY
console.log(getDayNameOne('10/11/2009'));
console.log(getDayNameTwo('10/20/2009'));