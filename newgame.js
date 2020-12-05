let btn=document.querySelector("#button");
btn.addEventListener("click",() => {
  newgame();
})

function newgame()
{
    for(let i=0;i<4;i++)
    {
      for(let j=0;j<4;j++)
      {
          field[i][j]=0;
      }
    }
    cleanBoard();
    drawline();
    cleanScore();
    turn=0;
    console.log("New Game");
}

function cleanBoard()
{
  context.fillStyle = "pink";
  context.fillRect(0, 0, board.width, board.height);
}

function cleanScore()
{
	score[0]=0;
	score[1]=0;
	updateScoreBoard();
}
