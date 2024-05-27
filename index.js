#! /usr/bin/env node
// Importing the necessary function from date-fns library
import { differenceInSeconds } from "date-fns";
// Step 1: Define a generator function for the countdown timer
function* countDownTimer(seconds) {
    // Loop through the countdown
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}
// Step 2: Initialize the countdown timer
const timerIterator = countDownTimer(10);
// Function to display the countdown
function displayCountDown() {
    // Get the next value from the timer iterator
    const result = timerIterator.next();
    // If countdown is not completed
    if (!result.done) {
        // Get the current time
        const now = new Date();
        // Calculate the countdown time based on the current time and the remaining seconds
        const countDownTime = new Date(now.getTime() + (result.value * 1000));
        // Calculate the remaining seconds
        const remainingSeconds = differenceInSeconds(countDownTime, now);
        // Display the remaining seconds
        console.log(`Time remaining: ${remainingSeconds} seconds.`);
        // Schedule the next update after 1 second
        setTimeout(displayCountDown, 1000);
    }
    else {
        // If countdown is completed, display a completion message
        console.log("The countdown has concluded. Your timer session has ended.");
    }
}
// Start the countdown timer
displayCountDown();
