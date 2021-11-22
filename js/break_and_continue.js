// "use strict"

(function() {


// 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement
// to continue prompting the user if they enter invalid input.

//1a.Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//except for the number the user entered.

//Number to skip is: 27

//Here is an odd number: 1
//Here is an odd number: 3
//Here is an odd number: 5
//Here is an odd number: 7
//Here is an odd number: 9
//Here is an odd number: 11
//Here is an odd number: 13
//Here is an odd number: 15
//Here is an odd number: 17
//Here is an odd number: 19
//Here is an odd number: 21
//Here is an odd number: 23
//Here is an odd number: 25
//Yikes! Skipping number: 27
//Here is an odd number: 29
//Here is an odd number: 31
//Here is an odd number: 33
//Here is an odd number: 35
//Here is an odd number: 37
//Here is an odd number: 39
//Here is an odd number: 41
//Here is an odd number: 43
//Here is an odd number: 45
//Here is an odd number: 47
//Here is an odd number: 49

    var oddBall = prompt("Pick a odd number between 1 and 50.");
    var userNum;

    while (true)    {
        userNum = parseInt(prompt("Give me an odd number between 1 and 50!"));
        if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
            break;
        }
    }
    for (var b = 1; b <= 50; b++ ) {
        if (b % 2 === 0)    {
            continue;
        }
        if (b === userNum) {
            console.log(" We don't talk about " +  userNum + " around these parts..");
            continue;
        }
        console.log("Here's an odd number: " + b);
    }

})();