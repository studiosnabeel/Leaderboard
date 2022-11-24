import './style.css';
import { addData, AddScoreList } from './Modules/api.js';

const myForm = document.querySelector('#myForm');
const refrshBtn = document.querySelector('.form-btn');

AddScoreList();

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const pName = myForm.pName.value.trim();
  const pScore = myForm.pScore.value;
  if (pName && pScore) {
    addData(pName, pScore);
    myForm.pName.value = '';
    myForm.pScore.value = '';
  }
});

refrshBtn.addEventListener('click', () => {
  AddScoreList();
});
