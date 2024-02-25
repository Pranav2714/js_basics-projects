const bubble = document.querySelector(".bubble");
const pbtm = document.querySelector("#pbtm");
const ptop = document.querySelector("#ptop");
const newGame = document.querySelector("#newGame");
function makeBubbles() {
  let clutter = "";
  for (let i = 0; i < 189; i++) {
    let ranNum = Math.floor(Number(Math.random() * 100));
    clutter += `<div class="bubble">${ranNum}</div>`;
  }
  pbtm.innerHTML = clutter;
}
let intervalId;
let timer = 60;
function runtimer() {
  intervalId = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      pbtm.innerText = `GAME OVER!`;
      pbtm.style.fontSize = "70px";
      clearInterval(intervalId);
      timer = 0;
      //   startNewGame();
    }
  }, 1000);
}
let rn;
function getNewHitVal() {
  rn = Math.floor(Math.random() * 100);
  let hitval = document.querySelector("#hitVal");
  hitval.textContent = rn;
  return rn;
}

let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

pbtm.addEventListener("click", (dets) => {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === rn) {
    increaseScore();
    makeBubbles();
    getNewHitVal();
  }
});

// function startNewGame() {
//   const newGame = document.querySelector("#newGame");
//   newGame.style.visibility = "visible";
//   newGame.addEventListener("click", () => {
//     makeBubbles();
//     runtimer();
//     getNewHitVal();
//     timer = 60;
//     document.querySelector("#score").textContent = "0";
//   });
// }

//
newGame.addEventListener("click", () => {
  startNewGame();
});

function startNewGame() {
  // newGame.style.visibility = "visible";
  makeBubbles();
  runtimer();
  getNewHitVal();
  timer = 60;
  document.querySelector("#score").textContent = "0";
  clearInterval(intervalId);
}

makeBubbles();
runtimer();
getNewHitVal();
