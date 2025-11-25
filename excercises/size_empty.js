function partyPlanner(rsvps) {
    let guestSet = new Set(rsvps);
  // Write your code here
  let output = {};
  output['uniqueGuests'] = guestSet.size;
  output['hasDuplicates'] = !(guestSet.size === rsvps.length)
  output['isEmpty'] = isEmpty(guestSet);
  return output;
}
function isEmpty(set) {
  return set.size === 0;
}