import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const getProgression = (startNumber, step, lengthProg) => {
  const arrProgression = [];
  for (let i = 0; i < lengthProg; i += 1) {
    arrProgression.push(startNumber + (i * step));
  }
  return arrProgression;
};

const task = 'What number is missing in the progression?';

const getGameResults = () => {
  const startNumber = getRandomNumber(1, 5);
  const step = getRandomNumber(1, 4);
  const progression = getProgression(startNumber, step, 10);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const randomNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const trueAnswer = randomNumber;
  return [question, String(trueAnswer)];
};
export default () => gameStart(task, getGameResults);
