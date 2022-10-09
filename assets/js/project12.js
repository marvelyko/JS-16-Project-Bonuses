const player0A = document.querySelector(".player_0");
const player1A = document.querySelector(".player_1");

const score0A = document.getElementById("score_0");
const score1A = document.getElementById("score_1");

const current0A = document.getElementById("current_0");
const current1A = document.getElementById("current_1");

const result0A = document.getElementById('result_0');
const result1A = document.getElementById('result_1');

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn_new");
const btnRoll = document.querySelector(".btn_roll");
const btnHold = document.querySelector(".btn_hold");

let score, game, activePlayer, currentScore;

function initialState() {
  score = [0, 0];
  game = true;
  activePlayer = 0;
  currentScore = 0;

  score0A.textContent = 0;
  score1A.textContent = 0;
  current0A.textContent = 0;
  current1A.textContent = 0;

  dice.classList.add("hidden");
  player0A.classList.add("player_active");
  player1A.classList.remove("player_active");
  player0A.classList.remove("player_winner");
  player1A.classList.remove("player_winner");
}

initialState();

btnRoll.addEventListener("click", function () {
  if (game) {
    const random_dice = Math.floor(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `../assets/images/dice-${random_dice}.png`;
    console.log(random_dice);

    if (random_dice !== 1) {
      currentScore += random_dice;
      document.getElementById(`current_${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayers();
    }
  }
});
let resultPlayer0 = 0;
let resultPlayer1 = 0;
btnHold.addEventListener("click", function () {
  if (game) {
    score[activePlayer] += currentScore;
    document.getElementById(`score_${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
        
      game = false;
      dice.classList.add("hidden");

      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("player_winner");
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.remove("player_active");
        
      if(activePlayer == 0) {
        resultPlayer0++;
        document.getElementById(`result_${activePlayer}`).textContent = resultPlayer0;
      }  else {
        resultPlayer1++;
        document.getElementById(`result_${activePlayer}`).textContent = resultPlayer1;
      }
    } else {
      switchPlayers();
    }
  }
});

switchPlayers = () => {
  currentScore = 0;
  document.getElementById(`current_${activePlayer}`).textContent = currentScore;

  if (activePlayer == 0) {
    activePlayer = 1;
  }else{
    activePlayer = 0;
  }

  player0A.classList.toggle('player_active');
  player1A.classList.toggle('player_active');

};

btnNew.addEventListener("click", initialState);
