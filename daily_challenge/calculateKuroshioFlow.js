function calculateKuroshioFlow(temperature, salinity, depth) {
    // Write code here
    let flow_index = 50;
    flow_index += temperature * .5;
    flow_index -= salinity * .3
    flow_index += depth / 10;

    if (flow_index < 0){
        flow_index = 0;
    }
    if (flow_index > 100){
        flow_index = 100;
    }
    flow_index = Math.round(flow_index * 10) / 10;

    return flow_index;

}
