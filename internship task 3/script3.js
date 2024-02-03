document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const status = document.getElementById('status');
    const resetBtn = document.getElementById('reset-btn');
    const cells = [];
  
    let currentPlayer = 'X';
    let gameActive = true;
    let moves = 0;
    let winner = null;
  
    let winsX = 0;
    let winsO = 0;
    let draws = 0;
  
    const winsXElement = document.getElementById('winsX');
    const winsOElement = document.getElementById('winsO');
    const drawsElement = document.getElementById('draws');
  
    updateScoreboard();
  
    // Create the game board
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', handleCellClick);
        cells.push(cell);
        board.appendChild(cell);
      }
    }
  
    // Event listener for reset button
    resetBtn.addEventListener('click', resetGame);
  
    function handleCellClick() {
      if (!gameActive) return;
  
      if (!this.textContent) {
        this.textContent = currentPlayer;
        this.classList.add(`player-${currentPlayer.toLowerCase()}`);
        moves++;
  
        if (checkWinner()) {
          winner = currentPlayer;
          status.textContent = `${winner} wins!`;
          gameActive = false;
          updateScoreboard();
        } else if (moves === 9) {
          status.textContent = 'It\'s a tie!';
          gameActive = false;
          draws++;
          updateScoreboard();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          status.textContent = `${currentPlayer}'s turn`;
        }
      }
    }
  
    // Check for a winner
    function checkWinner() {
      // (Your existing checkWinner logic)
    }
  
    // Reset the game
    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = 'black';
        cell.classList.remove('player-x', 'player-o');
      });
  
      currentPlayer = 'X';
      gameActive = true;
      moves = 0;
      winner = null;
      status.textContent = `${currentPlayer}'s turn`;
      updateScoreboard();
    }
  
    // Function to update the scoreboard
    function updateScoreboard() {
      winsXElement.textContent = `Wins (X): ${winsX}`;
      winsOElement.textContent = `Wins (O): ${winsO}`;
      drawsElement.textContent = `Draws: ${draws}`;
    }
  });
  