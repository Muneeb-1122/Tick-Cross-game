var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var modeBtn = document.querySelector(".mode");

var currMode = "dark";

modeBtn.addEventListener("click", () => {
    if (currMode === "dark") {
        currMode = "light";
        body.style.backgroundColor = "#16213D";

        cards.forEach(card => {
            card.style.backgroundColor = "#0F3460";
            card.style.border = "1px solid #d7d7d74f";
            card.style.color = "#fff";
            card.style.transition = "none";
            card.style.duration = "none";
        });
        
        modeBtn.style.backgroundColor = "#fff";
        console.log("Dark mode activated");
    } 
    else {
        currMode = "dark";
        body.style.backgroundColor = "#fafafa";

        cards.forEach(card => {
            card.style.backgroundColor = "#fff";
            card.style.color = "#000";
            card.style.border = "1px solid #000";
            card.style.transition = "none";
            card.style.duration = "none";
            card.style.hover = "#E94560";
        });
        modeBtn.style.backgroundColor = "#000";

        console.log("Light mode activated");
    }
});