function organizeFairSchedule(basketCount, textileCount, musicianSlots, belfryChimes) {
    // Write code here
    let schedule = []
    musicianSlots.forEach((slot) => {
        schedule.push(slot);
    })
    belfryChimes.forEach((chime) =>{
        schedule.push(chime);
    })
    return {
        baskets : basketCount + 1,
        textiles: textileCount + 1,
        schedule: schedule
    }
}
