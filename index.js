let computerImage = "";
let userImage = "";

function result(userImage, computerImage) {
  if (userImage === computerImage) {
    document.querySelector("#result").innerHTML = `<h1> Tie </h1>`;
  } else if (
    (userImage === "stone" && computerImage === "scissor") ||
    (userImage === "scissor" && computerImage === "paper") ||
    (userImage === "paper" && computerImage === "stone")
  ) {
    document.querySelector("#result").innerHTML = `<h1>You Win</h1>`;
  } else {
    document.querySelector("#result").innerHTML = `<h1>You Lose</h1>`;
  }
}

function computer() {
  let rc = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (rc === 0) {
    computerImage = "stone";
    computerChoice = `<img src="https://husseinhewehii.github.io/Rock_Paper_Scissors/rock.png"alt="stone"/>`;
    document.querySelector(".computer-image").innerHTML = computerChoice;
  } else if (rc === 1) {
    computerImage = "scissor";
    computerChoice = `<img src="./image/scissor.png" alt="scissor" />`;
    document.querySelector(".computer-image").innerHTML = computerChoice;
  } else {
    computerImage = "paper";
    computerChoice = `<img src="https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png" alt="paper"/>`;
    document.querySelector(".computer-image").innerHTML = computerChoice;
  }

  result(userImage, computerImage);
}

document
  .querySelector("#img-container")
  .addEventListener("click", function (detail) {
    // console.log(detail.target.outerHTML);
    if (detail.target.tagName === "IMG") {
      userImage = detail.target.alt;
      let userchoice = `${detail.target.outerHTML}`;
      document.querySelector(".user-image").innerHTML = userchoice;
      computer();
    }
  });
