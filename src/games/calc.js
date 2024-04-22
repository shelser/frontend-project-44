import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const getRandomSymbol = () => {
  const arrSymbol = ['+', '+', '-', '-', '*', '*'];
  const randomIndex = Math.floor(Math.random() * (arrSymbol.length - 1));
  return arrSymbol[randomIndex];
};
const task = 'What is the result of the expression?';

const getGameResults = () => {
  const gameResults = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(10, 50);
    const secondNumber = getRandomNumber(1, 10);
    const symbol = getRandomSymbol();
    const question = `Question: ${firstNumber} ${symbol} ${secondNumber}`;
    let trueAnswer;
    if (symbol === '+') {
      trueAnswer = firstNumber + secondNumber;
    }
    if (symbol === '-') {
      trueAnswer = firstNumber - secondNumber;
    }
    if (symbol === '*') {
      trueAnswer = firstNumber * secondNumber;
    }
    gameResults.push([question, String(trueAnswer)]);
  }
  return gameResults;
};
export default () => gameStart(task, getGameResults());
