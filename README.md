# EECS-368-dots-boxes
EECS 368 js project, Sam Gilchrist 

***
12-4-2020: NOW UPDATED FOR PROJECT 2 SUBMISSION: Changed from 5x5 to 2x2 board, patched some glitches, and changed the visuals a little.
See Project-1 branch for original submission
***


Dots and Boxes:


HOW TO PLAY: 
Players alternate placing dots on a 2x2 board made up of 2x2 boxes, attempting to score by placing the last dot in each box. A player goes an extra turn whenever they score. Game ends when a player wins by reaching a match score higher than 2 or when all dots are placed.


IMPORTANT:
Some implementation is referenced from my previous Gomoku group project from EECS 448 (taken this semester), and these sections are pre-commented as such in the files. These functions are "drawDots" (used to draw the dots on screen instead of using images), "drawline" (used to draw lines on the board), the click event listener (used to accurately place the dots on the board based on the mouse's position), and some of the score tracking implementation in scoreboard.js, which uses array functionality to keep track of the separate scores for the two players. All other code is newly written by me for this project. 

Samuel Gilchrist, 2886577
KU EECS 448
