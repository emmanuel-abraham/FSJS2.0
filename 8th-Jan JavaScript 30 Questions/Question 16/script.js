/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */




let userInput = prompt("Enter the current month");
userInput = userInput.toLocaleLowerCase();

switch (userInput) {
    case "december":
    case "january":
    case "february":
        alert(`The Season is Winter`)
        break;    


    case "september":
    case "october":
    case "november":
        alert(`The Season is Autumn`);
        break;

    
    
    case "march":
    case "april":
    case "may":
        alert(`The Season is Spring`);
        break;

    case "june":
    case "july":
    case "august":
        alert(`The Season is Summer`);
        break;

    default:
        alert("Please check spelling of month you entered")
        break;

}