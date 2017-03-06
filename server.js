var prompt = require('prompt'); //use prompt for command line prompts
var utils = require('./utils.js');
var express = require('express');
var app = express();
var board = [[null, null, null], [null, null, null], [null, null, null]];
console.log('0: [0, 1, 2] \n 1: [ , , ] \n 2: [ , , ]');
console.log('To play, enter the position of your move as a coordinate and your character ("x" or "o").')
console.log('For example, "2,1,x".')
console.log('The first number is the row number which is between 0 (top row) and 2 (bottom row).')
console.log('The second number is the column number which is between 0 (left column) and 2 (right column).')
prompt.start();

var win = false;

function afterPrompt(position) {
  console.log('position', position)
  var arr = position['player position'].split(',');
  if(arr[0] !== '0' && arr[0] !== '1' && arr[0] !== '2') {
    console.log('wrong row input!')
  }
  if(arr[1] !== '0' && arr[1] !== '1' && arr[1] !== '2') {
    console.log('wrong column input!')
  }
    if(arr[2] !== 'x' && arr[2] !== 'o' && arr[2] !== 'X' && arr[2] !== 'O') {
    console.log('wrong character input!')
  }
  let row = parseInt(arr[0])
  let col = parseInt(arr[1])
  board[row][col] = arr[2];
  console.log('Updated board', board);
  console.log('...and now the other player takes a turn!')
  if(utils.checkHorizontalWin(board[arr[0]])) {
    console.log('Game won!')
    return;
  }
  if(utils.checkVerticalWin(arr[1], board)){
    console.log('Game won!')
    return;
  }

  if(utils.checkDiagonalWin(arr[1], board)){
    console.log('Game won!')
    return; //not sure about this one - didn't get to test it in time
  }
}

prompt.get('player position', function(err, position) {
  afterPrompt(position);

  prompt.get('player position', function(err, position) {
    afterPrompt(position);

    prompt.get('player position', function(err, position) {
      afterPrompt(position);

      prompt.get('player position', function(err, position) {
        afterPrompt(position);

        prompt.get('player position', function(err, position) {
          afterPrompt(position);

          prompt.get('player position', function(err, position) {
            afterPrompt(position);

            prompt.get('player position', function(err, position) {
              afterPrompt(position);

              prompt.get('player position', function(err, position) {
                afterPrompt(position);

                prompt.get('player position', function(err, position) {
                  afterPrompt(position);
                });
              });
            });
          });
        });
      });
    });
  });
});

app.listen(3000)