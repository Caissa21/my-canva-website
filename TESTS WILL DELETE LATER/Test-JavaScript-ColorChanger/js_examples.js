let anotherProgram = true;

while (anotherProgram === true) {
  let num1 = Number(prompt(`enter a number: `));
  let num2 = Number(prompt(`enter a 2nd number: `));

  let op = prompt(`choose an operator: +, -, /, *`);

  while (op !== `+` && op !== `-` && op !== `/` && op !== `*`) {
    op = prompt(`wrong input, pls choose an operator again: +, -, /, *`);
  }

  if (op === `+`) {
    console.log(`answer is: ${num1 + num2}`);
  } else if (op === `-`) {
    console.log(`answer is: ${num1 - num2}`);
  } else if (op === `/`) {
    console.log(`answer is: ${num1 / num2}`);
  } else if (op === `*`) {
    console.log(`answer is: ${num1 * num2}`);
  }

  let answer = prompt(`Again?. yes or no only`);

  if (answer === `no` || answer === `NO` || answer === `No`) anotherProgram = false;
}
console.log(`THANKS FOR PARTICIPATING!`);
