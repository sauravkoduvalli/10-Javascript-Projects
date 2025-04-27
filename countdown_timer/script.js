let countDownDate = "Jan 1, 2026 00:00:00";

// this method will execute every each second.
var x = setInterval(() => {
  // use function to claculate the countdown
  getCountDown(countDownDate);
}, 1000);

function getCountDown(date) {
  const exprectedDateTime = new Date(date).getTime();
  const currentDateTime = new Date().getTime();

  let diffInDates = exprectedDateTime - currentDateTime;

  // time calculations for years, months, days, hours, minutes and seconds.
  let days = Math.floor(diffInDates / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffInDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)  );
  let minutes = Math.floor((diffInDates % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffInDates % (1000 * 60)) / 1000);

  // display the result in the elements with the help of id.
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (diffInDates < 0) {
    clearInterval(x);
    document.getElementsByClassName("big-text").innerHTML = 0;
  }
}