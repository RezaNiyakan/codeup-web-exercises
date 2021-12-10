"use strict"

// Create a function that accepts a GitHub username, and returns a promise
// that resolves returning just the date of the last commit that user made.
//     Reference the github api documentation to achieve this.

var url = 'https://api.github.com/users';
var githubAPI = fetch(url, {
    headers: {
        'Authorization': `token ${GITHUB_KEY}`
    }
});

console.log(githubAPI)

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_KEY}`}
    }).then(response => response.json())
        //turns it into a promise object above
        .then(events => {
            return events.filter(event => event.type ==="PushEvent")[0].created_at;
        });
}

getLastCommitDate('rezaniyakan').then(date => {
    console.log(new Date(date).toDateString());
});


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

function wait(millis) {
    return new Promise((resolve, reject) => {

        if (typeof millis !== "number")
            reject("That is not a milli... ");

        setTimeout(() => resolve(millis), millis);
    });
}

wait(1000).then((millis) =>
    console.log(`You'll see this after ${millis} milliseconds.`)
);

wait(3000).then((millis) =>
    console.log(`You'll see this after ${millis} milliseconds.`)
);