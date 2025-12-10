const { DIGITS } = require("./digitsarray5.js");
// Penkta uzduotis
const messages = [
    "Santa is preparing…",
    "Reindeer are buckling up…",
    "Sleigh warming up…",
    "Checking the gift list…",
    "Elves polishing candy canes…",
    "North Pole systems online…",
];

function printSingleDigit(n) {
    const lines = DIGITS[n];
    if (!lines) return;
    for (let line of lines) {
        console.log(line);
    }
}

function printNumber(num) {
    const str = String(num);

    const height = DIGITS[0].length;

    for (let row = 0; row < height; row++) {
        let line = "";
        for (let digitChar of str) {
            const d = parseInt(digitChar);
            line += DIGITS[d][row] + "  ";
        }
        console.log(line);
    }
}

function clearScreen() {
    process.stdout.write('\x1Bc');
}

let counter = 10;

function runCountdown() {
    clearScreen();

    console.log(`🕒 Timer: ${counter}\n`);

    printNumber(counter);

    console.log("\n" + messages[Math.floor(Math.random() * messages.length)]);

    if (counter === 0) {
        console.log("\n🎅✨ SANTA’S SLEIGH IS LAUNCHING! ✨🎅");
        return;
    }

    counter--;
    setTimeout(runCountdown, 1000);
}

runCountdown();
