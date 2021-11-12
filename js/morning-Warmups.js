(function() {

    function returnsSeven() {
        return 7;
    }

    console.log(returnsSeven());

    if (50 < 23 === false) {
        console.log("What is seven?");
    } else {
        console.log("Dont forget about me.")
    }

    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreakfastMessage = (hadBreakfast) ? "That was a good breakfast," : "My stomach hurts.";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);


    //Write a function called 'typeCheck' that takes an input and returns a string of the
    // data type entered. If the data type is a string, return the string "Haha,
    // it's a string of string!"
    function typeCheck(parameter) {
        if (typeof parameter === 'string') {
            return "Haha, it's a string of a string!";
        } else {
            return typeof parameter;
        }
    }

    Tests:
        console.log(console.log(typeCheck('')));
    //console.log(console.log(typeCheck(isNaN));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));


    // 10/19/21 write a program that console.logs 1 thru 100, (fizz buzz)

    for (var num = 1; num <= 100; num++) {
        var checkForThree = num % 3;
        var checkForFive = num % 5;

        if (checkForThree == 0 && checkForFive == 0)
            console.log("FizzBuzz");
        else if (checkForThree == 0)
            console.log("Fizz");
        else if (checkForFive == 0)
            console.log("Buzz");
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
    var Pikachu = {
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
    function filterForCanadiens(arr) {
        var bucket = [];
        arr.forEach(function (element) {
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
//     const area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));

    // console.log(area);

    // 11/2/21
    var groceries = [
        {
            name: "carrots",
            quantity: 5
        }, {
            name: "yams",
            quantity: 50
        }, {
            name: "oranges",
            quantity: 9
        }, {
            name: "onions",
            quantity: 2
        }, {
            name: "cucumbers",
            quantity: 6
        }, {
            name: "potatoes",
            quantity: 8
        }
    ];

    function getHighestQuantityObject(arr) {
        var obj = {
            name: "something",
            quantity: 0
        }
        arr.forEach(function (el) {
            if (el.quantity > obj.quantity) {
                obj = el
            }
        });
        return obj;
    }

    console.log(getHighestQuantityObject(groceries));

    //11/3/21
    // Write a function named ‘sortByName’ that takes in an array of objects, and
    // returns an array of objects in alphabetical order based on the name property.
    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]

    function sortByName(arr) {
        return arr.sort(function (a, b) {
            var aLower = a.name.toLowerCase();
            var bLower = b.name.toLowerCase();

            if (aLower < bLower) {
                return -1;
            } else if (aLower > bLower) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    console.log(sortByName(products));

    // 11/9/20
    //Write a function in JavaScript that takes in an array of objects and returns
    // the object with the lowest height property. Consider the following array to
    // test your code.

    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];

    function lowestHeight(arr) {
        var holdThis = {height: Number.MAX_VALUE}
        arr.forEach(function (el) {
            if (el.height < holdThis.height) {
                holdThis = el
            }
        });
        return holdThis;

        console.log(lowestHeight(bBallPlayers));
    }

    //..11/10/21

    var myCharacter = {
        name: 'Niyakan',
        hitPoints: 100,
        class: 'Warrior',
        abilities: {
            attack: function (obj) {
                console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + " damage!")
                obj.hitPoints -= myCharacter.weapon.damage;
                console.log(obj.name + " has " + obj.hitPoints + " hit points!")
            },
        },
        magicPoints: 0,
        weapon: {
            name: 'Silver Sabre',
            damage: 16,
            type: 'sword'
        }
    }

    var enemy = {
        name: 'Savage Orc',
        hitPoints: 100,
        class: 'Warrior',
        magicPoints: 0,
    }
        myCharacter.abilities.attack(enemy);

    //..11/12/21
    // Write a function in javascript that takes in an array and returns a
    // random element from the array

        function randomEl(arr)  {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        console.log(randomEl(["spurs", "lakers", "bulls"]));


})();