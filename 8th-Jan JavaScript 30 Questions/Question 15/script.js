/*15. Write a program which can give grades to students according to theirs scores:
- 80-100, A
- 70-79, B
- 60-69, C
- 50-59, D
- 0-49, F*/


function grades (marks) {
    if(marks >= 80 && marks <= 100){
        return `A Grade`
    }else if(marks >= 70 && marks <= 79){
        return `B Grade`
    }else if(marks >= 60 && marks <= 69){
        return `C Grade`
    }else if (marks >= 50 && marks <= 59){
        return `D Grade`
    }else if (marks >=0 && marks <= 49){
        return `F Grade`
    }else{
        return`Enter Correct Marks`
    }
}

const obtainedMarks = grades(75);
console.log(obtainedMarks)