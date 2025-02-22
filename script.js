// const body = document.body;
// const modeBtn = document.querySelector(".mode");
// const modePara = document.querySelector(".mode-para");
// const btn1 = document.querySelector(".btn1");
// const result = document.querySelector(".result");
// const main = document.querySelector("main");

// modePara.innerText = body.classList.contains("light-mode") ? "☀️" : "🌙";

// // Toggle Dark/Light Mode
// modeBtn.addEventListener("click", () => {
//     body.classList.toggle("light-mode");
//     body.classList.toggle("dark-mode");

//     console.log(body.classList.contains("light-mode") ? "Light mode activated" : "Dark mode activated");
// });

// btn1.addEventListener('click', () => {
//     result.style.display = 'block';
//     main.style.display = 'none';
// })

const body = document.body;
const modeBtn = document.querySelector(".mode");
const btn2 = document.querySelector(".btn2");
const result = document.querySelector(".result");
const main = document.querySelector("main");
const resBtn = document.querySelector(".res-btn");
const crossBtn = document.querySelector(".cross-btn");

result.style.display = "none";

// Toggle Dark/Light Mode
modeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  // Update button icon
  modeBtn.innerText = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Show result and hide game board
btn2.addEventListener("click", () => {
  result.style.display = "block";
  main.style.display = "none";
});

// Hide popup and show game board again
resBtn.addEventListener("click", () => {
  result.style.display = "none";
  main.style.display = "flex";
});

crossBtn.addEventListener("click", () => {
  result.style.display = "none";
  main.style.display = "flex";
});
  











var boxes1 = document.querySelectorAll(".card");
let turnO = true; // ye is lia ha k 2 player khel rahy hai ik bari ly ga or dosera wait kary ga then 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes1.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // Player O
      box.innerText = "O";
      turnO = false;
    } else {
      // Player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    CheckWinner();
  });
});

const CheckWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes1[pattern[0]].innerText;
        let pos2Val = boxes1[pattern[1]].innerText;
        let pos3Val = boxes1[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
               showWinner(pos1Val);
            }
        }
    };
}

var winnerDisplay = document.querySelector(".Winner-Js");

var showWinner = (winnear) => {
    winnerDisplay.innerText = `Player ${winnear} Wins!`;
    main.style.display = "none";
    result.style.display = "block";
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = flase;
        box.innerText = "";
    }
}

resBtn.addEventListener('click', ()=> {
    turnO = true;
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
}











// const player1;
// const player2;
