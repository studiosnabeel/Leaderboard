import addTable from './table.js';

const board = document.querySelector('.score-section');
const addTableData = (playerMarks) => {
  board.innerHTML = '';
  const table = document.createElement('table');
  playerMarks.forEach((player) => {
    addTable(player, table);
  });
  board.appendChild(table);
};

export default addTableData;
