let countdownDateFrom = "1 Jan 2026";

function countdown(date) {
    const exprectedDate = new Date(date);
    const currentDate = new Date();

    let differenceInDates = exprectedDate - currentDate;
    console.log(Date(differenceInDates).toString());
}


countdown(countdownDateFrom);