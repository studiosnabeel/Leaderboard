const addTable = (obj, table) => {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  tdName.innerHTML = obj.user;
  tr.appendChild(tdName);
  const tdScore = document.createElement('td');
  tdScore.innerHTML = obj.score;
  tr.appendChild(tdScore);
  table.appendChild(tr);
};

export default addTable;
