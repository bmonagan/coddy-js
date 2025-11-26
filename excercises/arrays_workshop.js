function arrayWorkshop(arr) {
  // Write your code here
  let uni = [...new Set(arr)];
  while (uni.length < 3){
    uni.push(0);
  }
  let fl = uni[0] + uni[(uni.length)-1];
  uni[0] = fl;
  uni[(uni.length)-1] = fl;
  return uni;
  
}
