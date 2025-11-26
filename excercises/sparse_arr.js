function analyzeSparseArray(arr) {
  let elementCount = 0;
  let largestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      elementCount++;
      largestGap = Math.max(largestGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }
  }

  largestGap = Math.max(largestGap, currentGap);

  return {
    length: arr.length,
    elementCount: elementCount,
    largestGap: largestGap
  };
}