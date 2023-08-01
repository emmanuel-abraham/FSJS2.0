//17. Write a program which tells the number of days in a month


function getDaysInMonths(year, month){
    const days = new Date(year, month, 0).getDate();

    return days;

}

//Find total days in October month in a non leap year
console.log(getDaysInMonths(2023, 10))

//Find total days in March month in a non leap year
console.log(getDaysInMonths(2021, 3))

//Find total days in February month in a non leap year
console.log(getDaysInMonths(2022, 2))