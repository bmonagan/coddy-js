function filterBoxesByRoom(boxLabels, roomName) {
    // Write code here
    let result = [];
    boxLabels.forEach(label =>{
        if (label.toLowerCase().includes(roomName)){
            result.push(label);
        }
    })
    return result;
}
