import readlineSync from 'readline-sync';

const getRandom = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const getAnswer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = getRandom(10, 20);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    const even = () => random % 2 === 0;
    const odd = () => random % 2 !== 0;
    if (answer !== 'yes' && answer !== 'no') {
      return console.log(`'${answer}' is wrong answer;(. Correct answer was 'yes' or 'no'.\nLet's try again, ${userName}!`);
    }
    if (even() && answer === 'yes') {
      console.log('Correct!');
    } else if (even() && answer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    } else if (odd() && answer === 'no') {
      console.log('Correct!');
    } else if (odd() && answer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default getAnswer;
