import getRandomNumber from '../getRandomNumber.js';
import gameStart from '../index.js';

const getProgression = () => {
  const startNumberProgression = getRandomNumber(1, 5);
  const progression = getRandomNumber(1, 4);
  const arrProgression = [];
  let result = startNumberProgression + progression;
  for (let i = 0; i < 10; i += 1) {
    result += progression;
    arrProgression.push(result);
  }
  return arrProgression;
};

const task = 'What number is missing in the progression?';

const getGameResults = () => {
  const gameResults = [];
  for (let i = 0; i < 3; i += 1) {
    const progression = getProgression();
    const randomIndex = Math.floor(Math.random() * (progression.length - 1));
    const randomNumber = progression[randomIndex];
    progression[randomIndex] = '..';
    const question = `Question: ${progression.join(' ')}`;
    const trueAnswer = randomNumber;
    gameResults.push([question, String(trueAnswer)]);
  }
  return gameResults;
};
export default () => gameStart(task, getGameResults());
