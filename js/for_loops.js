"Use Strict";
(function() {

// 2.Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the
// numbers 1 through 10)
//For example, showMultiplicationTable(7) should output

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
    showMultiplicationTable(7);
}

// 3. Use a for loop and the code from the previous lessons to generate 10 random
//numbers between 20 and 200 and output to the console whether each number is
//odd or even. For example:
//123 is odd
//80 is even
//24 is even
//199 is odd
//...

for (var j = 1; j <= 10; j++) {
    var randomNumber = Math.floor((Math.random() * 181) + 20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is an even number.");
    }   else    {
            console.log(randomNumber + " is an odd number.");
        }
    }

// 4. Create a for loop that uses console.log to create the output shown below.

//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999


        for ( var i = 1; i <= 9; i += 1) {
            var str = "";
            for (var g = 1; g <= i; g += 1) {
                str += i;
            }
            str = +"\n";
        }
            console.log(str);

// 5. Create a for loop that uses console.log to create the output shown below.

//100
//95
//90
//85
//80
//75
//70
//65
//60
//55
//50
//45
//40
//35
//30
//25
//20
//15
//10
//5


    //for (let i = 100; i >= 5; i--);  {

//}

for (var p = 100; p > 0; p -= 5) {
    console.log(p);
}
})();