//let testVar=0;
let matchBlue=0;
let matchRed=0;
let scoreMod=0;

function checkScore(color, x, y)
{
  if (x%2==0 && y%2==0)//top left
  {
    //console.log("Top left")
    if (field[x+1][y]!=0 && field[x][y+1]!=0 && field[x+1][y+1]!=0)
    {
      updateScore(color);
      scoreMod++;
      //console.log("Red Score: " + score[1])
      //console.log("Blue Score: " + score[0])
    }
  }
  else if (x%2==1 && y%2==0)//top right
  {
    //console.log("Top right")
    if (field[x-1][y]!=0 && field[x][y+1]!=0 && field[x-1][y+1]!=0)
    {
      updateScore(color);
      scoreMod++;
    }
  }
  else if (x%2==0 && y%2==1)//bottom left
  {
    //console.log("Bottom left")
    if (field[x+1][y]!=0 && field[x][y-1]!=0 && field[x+1][y-1]!=0)
    {
      updateScore(color);
      scoreMod++;
    }
  }
  else if (x%2==1 && y%2==1)//bottom right
  {
    //console.log("Bottom right")
    if (field[x-1][y]!=0 && field[x][y-1]!=0 && field[x-1][y-1]!=0)
    {
      updateScore(color);
      scoreMod++;
    }
  }
  //testVar++;

}
