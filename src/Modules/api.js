import addTableData from './data.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const apiKey = 'XS8cvDPW4bUyTPeVkxvs';
const apiUrl = `${baseUrl}${apiKey}/scores`;

const addData = async (player, scr) => {
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player,
      score: scr,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const alrt = document.querySelector('h4');
      alrt.innerHTML = json.result;
      alrt.style.backgroundColor = '#fff';
      alrt.style.color = 'red';
      setTimeout(() => {
        alrt.style.display = 'none';
      }, 4000);
    });
};

const AddScoreList = async () => {
  await fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      addTableData(json.result.sort((a, b) => a.score - b.score));
    });
};

export { addData, AddScoreList };
