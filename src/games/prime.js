import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameResults = () => {
  const gameResults = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 50);
    const question = `Question: ${num}`;
    const trueAnswer = isPrime(num) ? 'yes' : 'no';
    gameResults.push([question, trueAnswer]);
  }
  return gameResults;
};
export default () => gameStart(task, getGameResults());
