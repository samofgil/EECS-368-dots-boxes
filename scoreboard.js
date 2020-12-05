let score = [0, 0];
let scoreWin = [0, 0];
let winTick = 0;

//Referenced from Gomoku project
function updateScore(color)
{
	if(color == teamcolor[0])
	{
		score[0]++;
	}
	else
	{
		score[1]++;
	}
	updateScoreBoard();
}

function updateWin(color)
{
	if(color == "blue")
	{
		scoreWin[0]++;
	}
	else
	{
		scoreWin[1]++;
	}
	updateWinBoard();
}

function updateScoreBoard()
{
	document.getElementById('score1').innerText = score[0];
	document.getElementById('score2').innerText = score[1];
}

function updateWinBoard()
{
	document.getElementById('win1').innerText = scoreWin[0];
	document.getElementById('win2').innerText = scoreWin[1];
}
