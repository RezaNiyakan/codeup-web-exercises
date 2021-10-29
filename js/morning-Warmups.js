(function() {

    function returnsSeven() {
        return 7;
    }
    console.log(returnsSeven());

    if (50 < 23 === false) {
        console.log("What is seven?");
    } else  {
        console.log("Dont forget about me.")
    }

    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreakfastMessage = (hadBreakfast) ? "That was a good breakfast," : "My stomach hurts.";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);


    //Write a function called 'typeCheck' that takes an input and returns a string of the
    // data type entered. If the data type is a string, return the string "Haha,
    // it's a string of string!"
        function typeCheck(parameter)   {
            if (typeof parameter === 'string') {
                return "Haha, it's a string of a string!";
            } else  {
                return typeof parameter;
            }
        }

    Tests:
        console.log(console.log(typeCheck('')));
    //console.log(console.log(typeCheck(isNaN));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));


    // 10/19/21 write a program that console.logs 1 thru 100, (fizz buzz)

    for (var num = 1; num <= 100; num ++ )   {
        var checkForThree = num % 3;
        var checkForFive = num % 5;

    if (checkForThree == 0 && checkForFive == 0)
        console.log ("FizzBuzz");
    else if (checkForThree == 0)
        console.log ("Fizz");
    else if (checkForFive == 0)
        console.log ("Buzz");
    else
        console.log(num);
    }

    // 10/20/21 Create a function named secondToLast that accepts an array as an
    // argument and will return the second to last element of the array.
        function secondToLast(arr) {
            return arr[arr.length - 2];
    }
        console.log(secondToLast(["First", "Second", "Not Last", "Last"]));


    // 10/21/21 Write a function named 'moveToEnd' that takes in an array, and returns
    // the array with the original first index moved to the last index of the array.
    //Example:
    //moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
    //moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];

            function moveToEnd(arr) {
                var removedElement = arr.shift();
                arr.push(removedElement);
                return arr;
            }

            // 10/25/21
            var Pikachu =   {
                name: "pikachu",
                description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
                height: {
                    feet: 1,
                    inches: 4
                },
                color: "yellow",
                age: "25",
                type: "electricity",
                weakness: "ground",
                gender: "male",
                category: "mouse"

            }

            // 10/26/21
   // Create a function that accepts an array as an argument and that returns an array
    //of objects that have a nationality property of “Canadian”.

    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];
            //Davids answer
            function filterForCanadiens(arr)    {
                var bucket = [];
                arr.forEach(function (element)  {
                    if (element.nationality === "Canadien") {
                        bucket.push(element);
                    }
                });
                return bucket;
            }
            console.log(filterForCanadiens(wrestlers));

         //10/27/21
    //  Find the area of a circle, and round it to the nearest whole number using
    //  the math object
    // var circle =    {
       // radius 36
    //}
// Area of a circle = PI * radius^2
    var area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));

    console.log(area);
})();




