function findMissingKeys(data, requiredKeys) {
  // Write your code here

  let res = [];

  for (let key of requiredKeys){
    if (!(key in data)){
        res.push(key);
    }
  }
  return res;
}

// Do not modify below this line