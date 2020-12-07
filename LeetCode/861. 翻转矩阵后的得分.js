/**
 * @param {number[][]} A
 * @return {number}
 */
// 思路，保证最高位是1的前提下，往后的每一列都进行判断，如果当前列的0比1多，则进行转换
var matrixScore = function (A) {
  const n = A.length;
  if(n === 0)return 0;
  const m = A[0].length;
  
  // 把首列全部旋装为1
  for(let i=0;i<n;i++){
    if(A[i][0] !== 1){
      switchR(A,i)
    }
  }
  // 进行每列旋装
  for(let i=1;i<m;i++){
    if(checkSwitch(A,i)){
      switchC(A,i);
    }
  }
  // 累加
  let sum = 0;
  for(let i=0;i<n;i++){
    let item = '';
    for(let j=0;j<m;j++){
      item+=A[i][j]
    }
    sum+=parseInt(item,2);
  }
  return sum;
};

// 判断是否需要翻转
var checkSwitch = function(A,index){
  const len = A.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if(A[i][index] === 1){
      count++;
    }else{
      count--;
    }
  }
  return count<0;
}

// 以列为单位进行翻转
var switchC = function (A, index) {
  const len = A.length;
  for (let i = 0; i < len; i++) {
    A[i][index] === 1 ? A[i][index] = 0 : A[i][index] = 1
  }
}
// 以行为单位进行翻转
var switchR = function (A, index) {
  const len = A[index].length;
  for (let i = 0; i < len; i++) {
    A[index][i] === 1 ? A[index][i] = 0 : A[index][i] = 1
  }
}


matrixScore(
  [
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0]
  ]);

matrixScore(
  [
    [0, 0, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 0]
  ]);