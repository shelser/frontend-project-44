import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const gbc = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB !== 0) {
    const temp = tempA % tempB;
    tempA = tempB;
    tempB = temp;
  }
  return tempA;
};

const task = 'Find the greatest common divisor of given numbers.';

const getGameResults = () => {
  const gameResults = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(10, 50);
    const secondNumber = getRandomNumber(1, 10);
    const question = `Question: ${firstNumber} ${secondNumber}`;
    const trueAnswer = gbc(firstNumber, secondNumber);
    gameResults.push([question, String(trueAnswer)]);
  }
  return gameResults;
};
export default () => gameStart(task, getGameResults());
