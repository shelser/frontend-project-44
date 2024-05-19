import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const getCalculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const task = 'What is the result of the expression?';

const getGameResults = () => {
  const arrSymbol = ['+', '-', '*'];
  const firstNumber = getRandomNumber(10, 50);
  const secondNumber = getRandomNumber(1, 10);
  const symbol = arrSymbol[getRandomNumber(0, 2)];
  const question = `Question: ${firstNumber} ${symbol} ${secondNumber}`;
  const trueAnswer = getCalculate(firstNumber, secondNumber, symbol);
  return [question, String(trueAnswer)];
};
export default () => gameStart(task, getGameResults);
