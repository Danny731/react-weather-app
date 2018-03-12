const daysMap = {
  "0": 'Sunday',
  "1": 'Monday',
  "2": 'Tuesday',
  "3": 'Wednesday',
  "4": 'Thursday',
  "5": 'Friday',
  "6": 'Saturday',
}

const monthsMap = {
  "0": "Jan",
  "1": "Feb",
  "2": "Mar",
  "3": "Apr",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "Aug",
  "8": "Sept",
  "9": "Oct",
  "10": "Nov",
  "11": "Dec"
}

export function getDate (unixTimeStamp) {
  let date = new Date(unixTimeStamp * 1000);
  let day = daysMap[date.getDay()];
  let month = `${monthsMap[date.getMonth()]}${date.getDate()}`;
  return `${day}, ${month}`;
}