function swapEnds(arr) {
    let last = arr.pop();
    let first = arr.shift();
    arr.unshift(last);
    arr.push(first);
    return arr;

}