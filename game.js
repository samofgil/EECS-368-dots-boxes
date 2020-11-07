let field=[];
 for(let i=0;i<15;i++)
 {
    field[i]=[];
    for(let j=0;j<15;j++)
    {
        field[i][j]=0;
    }
 }
let board=document.querySelector("#board");
let context=board.getContext("2d");
context.strokeStyle="black";
document.addEventListener("DOMContentLoaded", () => {
    drawline();
})

//Referenced from Gomoku project
function drawline()
{
    for(let i=0;i<5;i++)
    {
        context.beginPath();
        context.moveTo(i*60,0);
        context.lineTo(i*60,300);
        context.stroke();
        context.moveTo(0, i*60);
        context.lineTo(300, i*60);
        context.stroke();
    }
}

let turn=0;
let teamcolor=['navy','red'];


//Referenced from Gomoku project
function drawDots (x,y,color)
{
    context.beginPath();
    context.arc(x,y,10,0,2 * Math.PI);
    context.closePath();
    context.fillStyle = color;
    context.fill();
}


//Referenced from Gomoku project
board.addEventListener('click', (a) => {
    let xDist=Math.floor((a.offsetX)/30)*30+15;
    let yDist=Math.floor((a.offsetY)/30)*30+15;

    if(field[(xDist-15)/30][(yDist-15)/30]==0 )//0
    {
        drawDots(xDist,yDist,teamcolor[(turn+scoreMod)%2]);
        field[(xDist-15)/30][(yDist-15)/30]=teamcolor[turn%2];
        checkScore(teamcolor[(turn+scoreMod)%2], (xDist-15)/30, (yDist-15)/30);
        checkWin();
        turn++;
        console.log("Turn " + turn + " of 100 (" + teamcolor[((turn+scoreMod)-1)%2] + ")");
        if (turn==100)
        {
          checkWinFull();
        }
    }
})
