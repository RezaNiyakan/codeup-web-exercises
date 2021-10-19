"use strict"
(function() {


//Create a while loop that uses console.log() to create the output shown below.

    var multipliedNum = 2;
    while (multipliedNum <= 65536) {
        console.log(multipliedNum);
        multipliedNum *= 2;
    }

//2
//4
//8
//16
//32
//64
//128
//256
//512
//1024
//2048
//4096
//8192
//16384
//32768
//65536


    // An ice cream seller can't go home until she sells all of her cones. First
    // write enough code that generates a random number between 50 and 100 representing
    // the amount of cones to sell before you start your loop. Inside of the loop your
    // code should generate another random number between 1 and 5, simulating the amount
    // of cones being bought by her clients. Use a do-while loop to log to the console
    // the amount of cones sold to each person. This is a way get the random numbers for
    // this exercise.

    //This how you get a random number between 1 and 50.
    var allCones =Math.floor(math.random() * 50) + 50;
    console.log("Opening up shop! I've got " + allCones + " to sell!");
    do {
        //This expression will generate a number between 1 and 5.
        var conesToBuy = Masth.floor(Math.random() * 5) + 1;
        if (conesToBuy <= allCones) {
            allCones -= conesToBuy;
            console.log("Customer wants to buy " + conesToBuy + " cones, I have " + allCones + " comes left in stock."};
    }else
    {
        console.log("Sorry pal, we can't sell you " + conesToBuy + "cones. We only have " + allCones + " cones left in stock.")
    }   while allCones !== 0)

        console.log("Closing up shop!");

    }

})();