//18. Write a program which tells the number of days in a month, now consider leap year.

function getDaysInMonths(year, month) {
    const days = new Date(year, month, 0).getDate();


       return days;
}


//number of days in feb month in year 2000
console.log(getDaysInMonths(2000, 2))

//number of days in feb month in year 2020
console.log(getDaysInMonths(2020, 2))