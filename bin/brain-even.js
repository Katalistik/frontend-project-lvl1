import readlineSync from 'readline-sync';

function dialog2() {
  const userName = readlineSync.question('May I have your name?');
  console.log(`${'Hello'}, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  while (i < 3) {
    const random = (Math.floor(Math.random() * 100));
    console.log(`${'Question:'} ${random}`);
    const answer = readlineSync.question('Your answer:');
    const isYes = answer === 'yes';
    const isNo = answer === 'no';
    // if (answer !== 'yes' && answer !== 'no')
    if (!isYes && !isNo) {
      console.log(`${answer} ${"is wrong answer ;(.\nLet's try again,"} ${userName} !`);
      return;
    }
    if ((random % 2 === 0 && isYes) || (random % 2 !== 0 && isNo)) {
      console.log('Correct !');
      i = i + 1;
    } else {
      console.log(`${answer} ${"is wrong answer ;(.\nLet's try again,"} ${userName} !`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
}

dialog2();
export default dialog2;