"use strict";

/**
 * Function: print1
 * Description: Prints your name 10 times with a 1-second delay using setTimeout().
 */
function print1() {
  const name = "Kaushal Mohan Kumar"; // Replace with your name if needed

  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(`print1: ${name}`);
    }, i * 1000); // Delay increases by 1 second each iteration
  }
}

/**
 * Function: print2
 * Description: Prints your name 10 times at 1-second intervals using setInterval().
 */
function print2() {
  const name = "Kaushal Mohan Kumar"; // Replace with your name if needed
  let count = 0;

  const intervalId = setInterval(() => {
    count++;
    console.log(`print2: ${name}`);

    // Stop after 10 prints
    if (count === 10) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Call both functions
print1();
print2();
