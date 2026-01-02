const score = {
        wins: 0,
        Losses: 0,
        Draws: 0,
      };

      document.querySelector(".js-score").innerHTML =
        `you <img src="${playerMove}-emoji.png" class="move-icon"> <img src="${computerMove}-emoji.png" class="move-icon">
    computer`;
      
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = "";

      if (playerMove === "Scissors") {
        if (computerMove === "Rock") {
          result = "You Lose.";
        } else if (computerMove === "Paper") {
          result = "You Win.";
        } else if (computerMove === "Scissors") {
          result = "Draw.";
        }
      } else if (playerMove === "Paper") {
        if (computerMove === "Rock") {
          result = "You Win.";
        } else if (computerMove === "Paper") {
          result = "Draw.";
        } else if (computerMove === "Scissors") {
          result = "You Lose.";
        }
      } else if (playerMove === "Rock") {
        if (computerMove === "Rock") {
          result = "Draw.";
        } else if (computerMove === "Paper") {
          result = "You Lose.";
        } else if (computerMove === "Scissors") {
          result = "You Win.";
        }
      }

      if (result === "You Win.") {
        score.wins += 1;
      } else if (result === "You Lose.") {
        score.Losses += 1;
      } else if (result === "Draw.") {
        score.Draws += 1;
      }

      localStorage.setItem("score", JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You chose ${playerMove} and computer chose ${computerMove}`;
    }

    function updateScoreElement() {
      document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}, Losses: ${score.Losses}, Draws: ${score.Draws}`;
    }

    function pickComputerMove() {
      let computerMove = "";
      const randomNumber = Math.random();

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissors";
      }

      return computerMove;
    }