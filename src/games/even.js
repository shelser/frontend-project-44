import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const isEven = (randomNumber) => randomNumber % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameResults = () => {
  const gameResults = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(10, 20);
    const question = `Question: ${randomNumber}`;
    const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
    gameResults.push([question, trueAnswer]);
  }
  return gameResults;
};
export default () => gameStart(task, getGameResults());
