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


    Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
        function typeCheck(parameter)   {
            if (typeof parameter === 'string') {
                return "Haha, it's a string of a string!";
            } else  {
                return typeof parameter;
            }
        }

    Tests:
        console.log(console.log(typeCheck('')));
    console.log(console.log(typeCheck(isNaN()));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));


})();



