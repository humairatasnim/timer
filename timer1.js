// Create an array with all command line arguments that were passed
const array = process.argv.splice(2);

// Filter array and remove non-numbers and negative numbers
let timers = array.filter(function(value) {
  return parseInt(value) && Math.sign(value) !== -1;
});

// Iterate through array and beep when specified amount of time has passed
for (const timer of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);
}