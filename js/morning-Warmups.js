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



})();



