import readlineSync from 'readline-sync';

const gameStart = (task, getGameResult) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, trueAnswer] = getGameResult();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default gameStart;
