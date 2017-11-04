
Write a function named holidayCountdown. This function should accept two
parameters, the holiday name and number of days till that holiday. The function
should return the string `It's ${days} days until ${holiday}!`
function happyHolidays() {
  return "Happy Holidays!"
}
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, daysLeft) {
  return `It's ${daysLeft} days until ${holiday}!`
}
