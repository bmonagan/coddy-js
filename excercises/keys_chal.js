function filterObject(obj, keysToKeep) {
    // Write your code here
    let new_obj = {};
    for (const [k,v] of Object.entries(obj)){
        if (keysToKeep.includes(k)){
            new_obj[k] = v;
        }
    }
    return new_obj;
}
// Do not modify code outside the function