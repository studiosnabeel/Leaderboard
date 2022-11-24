import './style.css';
import { addData, AddScoreList } from './Modules/api.js';

const myForm = document.querySelector('#myform');
const refrshBtn = document.querySelector('.refresh-btn');

// AddScoreList();

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = myForm.input1.value.trim();
  const playerScore = myForm.input2.value;
  // console.log(playerName, playerScore);
  if (playerName && playerScore) {
    addData(playerName, playerScore);
    myForm.input1.value = '';
    myForm.input2.value = '';
  }
});

refrshBtn.addEventListener('click', () => {
  console.log('click');
  AddScoreList();
});
