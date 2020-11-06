/**
—TO DECLARE WINNER WHEN A MSV=13
	—BLUE
	—RED
**/
function checkWin()
{
  if (score[1]>12)
  {
    alert("Red Team wins! Click 'New Game' if you want to play again. ");
    updateWin("red");
  }
  else if (score[0]>12)
  {
    alert("Blue Team wins! Click 'New Game' if you want to play again. " );
    updateWin("blue");
  }
}

/**
—TO DECLARE WINNER WHEN TURN 100 reached
	—TIE
	—BLUE
	—RED
**/
function checkWinFull()
{
    	//
    	//update the score
    if (score[1]>score[0])
    {
      alert("Red Team wins! Click 'New Game' if you want to play again. ");
      updateWin("red");

    }
    else if (score[0]>score[1])
    {
      alert("Blue Team wins! Click 'New Game' if you want to play again. " );
      updateWin("blue");
    }
    else
    {
      alert("It's a tie! Click 'New Game' if you want to play again. " );
    }
}
