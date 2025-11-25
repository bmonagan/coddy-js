function removeKeys(obj, keysToRemove) {
    // Write code here
    for (let k of keysToRemove){
        if (k in obj){
            delete obj[k];
        }
    }
    return obj;
}
// Do not write anything outside function