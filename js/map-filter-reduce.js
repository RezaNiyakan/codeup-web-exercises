"use strict";

$(document).ready(()=> {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

//TODO 1: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    let threeLanguages = users.filter((language) =>
        language.languages.length > 2);

    console.log(threeLanguages);


//TODO 2: Use .map to create an array of strings where each element is a user's email address

    let email = users.map(function (user) {
        return user.email;
    });

    console.log(email);

    //             ||
    // let emails = users.map(user => user.email);
    // console.log(emails)


//TODO 3: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    let totalYears = users.reduce((totalYears, user) => {
        return totalYears + user.yearsOfExperience;
    }, 0);
    console.log(totalYears);
    let avgExp = totalYears/users.length;
    console.log(avgExp);

//TODO 4: Use .reduce to get the longest email from the list of users.

    let longestEmail = users.reduce((startLength,addLetter) => startLength.email.length > addLetter.email.length ? startLength : addLetter);
    console.log(longestEmail);


//TODO 5: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

    let instructors = users.reduce((finalString, user, index) => {
        if(index === users.length -1) {
            return `${finalString} ${user.name}.`
            }   else {
            return `${finalString} ${user.name}.`
        }
    }, "Your instructors are:")



})