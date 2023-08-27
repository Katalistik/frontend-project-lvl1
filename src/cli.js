/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function dialog() {
  const userName = readlineSync.question('May I have your name?');
  console.log(`${'Hello'}, ${userName}!`);
}

export default dialog;
