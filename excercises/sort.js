function sortByLength(arr) {
    return arr.sort((a, b) => {
        // Write code here
        if (a.length === b.length){
            return a.localeCompare(b);

        }
        return a.length - b.length;

    })
}