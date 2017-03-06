exports.checkHorizontalWin = (rowArr) => {
  let isSame = true;
  for(var i = 1; i<rowArr.length; i++) {
    if(rowArr[i] !== rowArr[i-1]) {
      isSame = false;
    }
  }
  return isSame;
}

exports.checkVerticalWin = (colNum, board) => {
  let colArr = [];
  for(var j = 0; j < 3; j++){
    colArr.push(board[j][colNum])
  }
  return this.checkHorizontalWin(colArr);
}

exports.checkDiagonalWin = (board) => {
  var rightdown = [[0,0], [1,1], [2,2]];
  var leftdown = [[0,2], [1,1], [2,0]];
  let isSame = true;
  for(var k=1; k<3; k++) {
    let currx = rightdown[k][0];
    let curry = rightdown[k][1];
    if(board[currx][curry] !== board[rightdown[k-1][0]][rightdown[k-1][1]]) {
      isSame = false;
    }
  }
  console.log('checkDiagonalWin', isSame)
  return isSame;
}