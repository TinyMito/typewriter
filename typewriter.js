const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  // Add delay after each loop otherwise all char will print all at once.
  delay += 50;
}
// Fix the % character.
setTimeout(() => {console.log();}, delay);