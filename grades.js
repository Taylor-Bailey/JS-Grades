// Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
const scores = [82, 71, 84, 95, 55, 98, 69, 72, 78, 84, 93, 58, 87, 60]

const grades = {A:0, B:0, C:0, D:0, F:0} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    var grade = scores[i];
     /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
    switch(true){
        case(scores[i] > 90):
        grades["A"] +=1;
        break;
        case(scores[i] > 80):
        grades["B"] +=1;
        break;
        case(scores[i] > 70):
        grades["C"] +=1;
        break;
        case(scores[i] > 60):
        grades["D"] +=1;
        break;
        case(scores[i] <=60):
        grades["F"] +=1;
    }
}

// -------------------------------------------------------------------------------------------------------------- //
// ----------------- Use console.log() to output the following criteria to the browser console. ----------------- //
// -------------------------------------------------------------------------------------------------------------- //

// How many of each grade? Accomplish this with a for..in loop.
for (let numberOfGrades in grades) {
    console.log(`${numberOfGrades} = ${grades[numberOfGrades]}`); 
}

// What is the lowest score? Sort the array and find out.
scores.sort(function(a, b){return a - b});
console.log("Lowest Score = ", scores[0]);

// What is the highest score?
scores.sort(function(a, b){return b - a});
console.log("Highest Score = ", scores[0]);

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
var currentGradeCount = 0;
for (let key in grades) {
    if (currentGradeCount <= grades[key]) {
        currentGradeCount = grades[key];
        var gradeMode = key;
    }
}
console.log("The grade that was achieved most often by students was a " + gradeMode + ".");

// Which grade had the fewest students achieve it?
var CurrentGradeCount = 0;
for (let key in grades) {
    if (currentGradeCount >= grades[key]) {
        currentGradeCount = grades[key];
        var gradeEdom = key;
    }
}
console.log("The grade that was acheived least often by students was a " + gradeEdom + ".");