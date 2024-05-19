import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const isEven = (number) => !(number % 2);
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameResults = () => {
  const randomNumber = getRandomNumber(10, 20);
  const question = `Question: ${randomNumber}`;
  const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, trueAnswer];
};
export default () => gameStart(task, getGameResults);
