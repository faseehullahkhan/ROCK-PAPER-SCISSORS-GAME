let userwin = true;
let userscore = 0;
let computerscore = 0;
let message = document.querySelector("#msg")
let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score");
let reset = document.querySelector(".button")

let choice = document.querySelectorAll(".choice");
const compplaygame = () => {
  let arr = ["rock", "paper", "scissors"];
  let ranidx = Math.floor(Math.random() * 3);
  return arr[ranidx];
};
const showwinner = (userwin) => {
  if (userwin) {
    message.innerText = "YOU WIN"
    userscore++;
    user.innerText = userscore
  } else {
    message.innerText = "COMPUTER WIN"
    computerscore++;
    computer.innerText = computerscore
  }
};

const userplaygame = (userchoice) => {
  console.log(`Users choice is ${userchoice}`);
  const computerchoice = compplaygame();
  console.log(`Computers choice is ${computerchoice}`);
  matchresult(userchoice, computerchoice);
};
const matchresult = (userchoice, computerchoice) => {
  if (userchoice === computerchoice) {
    message.innerText = "MATCH DRAW"
    userwin = false
  } else {
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissors" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    userplaygame(userchoice);
  });
});

reset.addEventListener("click",() =>{
  userscore = 0;
  computerscore = 0;
  user.innerText = userscore
  computer.innerText = computerscore
  message.innerText = "PLAY YOUR MOVE"
})