//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = ["facebook", "twitter", "pw skills", "discord", "instagram", "pw skills", "linkedin"];

const firstOccurrence = arr.indexOf("pw skills")

const lastOccurrence = arr.lastIndexOf("pw skills"); // to find lastOccurrence


const output = `The first occurrence of "pw skills" is at index : ${firstOccurrence}
The last occurrence of "pw skills" is at index : ${lastOccurrence} `;

console.log(output);