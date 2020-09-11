/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const len = 9;
  const res = [];
  const list = [];
  const dfs = function (start, depth,sum) {
    if(sum>n)return;
    if(sum === n && list.length === k){
      res.push([...list]);
      return;
    }
    for (let i = start; i < len; i++) {
      list.push(i + 1);
      sum+=(i+1);
      dfs(i + 1, depth + 1,sum);
      sum-=(i+1);
      list.pop();
    }
  }
  dfs(0, 0, 0);
  return res;
};

// 官方的二进制（子集）枚举法
var combinationSum3 = function(k,n){
  let temp = [];
  const ans = [];
  const check = (mask,k,n)=>{
    temp = [];
    for(let i=0;i<9;i++){
      if((1<<i) & mask){
        temp.push(i+1);
      }
    }
    return temp.length === k && temp.reduce((p,v)=>p+v,0) === n;
  }
  for(let mask = 0;mask < (1<<9);mask++){
    if(check(mask,k,n)){
      ans.push(temp);
    }
  }
  return ans;
}


combinationSum3(1,1); // [[1]]
combinationSum3(0,0); // []
combinationSum3(3, 7); // [[1,2,4]]
combinationSum3(3, 9); // [[1,2,6], [1,3,5], [2,3,4]]