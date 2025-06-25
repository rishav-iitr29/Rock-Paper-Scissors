const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

    function pickComputerMove(){

      let computerMove = '';
 
      const randomNumber = Math.random();
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
      } else if (randomNumber >=1/3 && randomNumber<2/3){
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }

      return computerMove;
    }

    function computeResult(computerMove, playerMove){
      if (computerMove === playerMove) {
        score.ties++;
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        return 'Tie.';
      } else if ((computerMove === 'rock' && playerMove === 'scissors') ||
                (computerMove === 'paper' && playerMove === 'rock') ||
                (computerMove === 'scissors' && playerMove === 'paper')) {
        score.losses++;
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        return 'You lose.';
      } else {
        score.wins++;
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        return 'You win.';
      }
    }
    function updateScoreElement(){
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    function updateMove(playerMove){
      document.querySelector('.js-result')
        .innerHTML = result;
      document.querySelector('.js-moves')
        .innerHTML = `You
          <img class="move-icon" src="images/${playerMove}-emoji.png">
          <img class="move-icon" src="images/${computerMove}-emoji.png">
          Computer`;
    }
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;