function alternateCase(str) {
  // Write your code here
  let casestatus = 0;
  let res = '';
  for (let i = 0; i < str.length; i++){
    if (casestatus == 0){
        res +=  str[i].toUpperCase()
        casestatus = 1
    } else {
        res += str[i].toLowerCase();
        casestatus = 0;
    }
  }
    console.log(res)
}
// Do not write anything outside function