/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
// import { maxBy } from "../exercises/e17";

export function getGreatestDiscoveryYear(data) {
    // Your code goes here...
    // feel free to import your `maxBy` or `minBy` methods from previous lessons
    var yearsAndCounts = {};
    data.asteroids
        .filter((asteroid) => {
            if (yearsAndCounts[asteroid.discoveryYear]) {
                yearsAndCounts[asteroid.discoveryYear] += 1;
            } else {
                yearsAndCounts[asteroid.discoveryYear] = 1;
            }
        });


    var resultArray = [];
    resultArray = Object.entries(yearsAndCounts);
    let maxCount = 0;
    let year = 0;

    for (let elem of resultArray) {
        if (elem[1] > maxCount) {
            year = elem[0];
            maxCount = elem[1];
        }
    }
    // const date = new Date(year);
    // return date.getFullYear();
    //the previous method returned a year earlier!! 1846. So using the casting method.
    return Number(year);

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
