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
    modeBtn.innerText = body.classList.contains("light-mode") ? "☀️" : "🌙";
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
