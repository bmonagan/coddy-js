function analyzeCarData(carData) {
    // Write code here
    let output = {'mostExpensive': undefined,
                        'cheapest': undefined,
                        'averagePrice': undefined};
  let total_price = 0;
  let highest_price = 0;
  let lowest_price = 123456789
  for (const [k,v] of Object.entries(carData)){
    if (v > highest_price){
        highest_price = v;
        output['mostExpensive'] = k;
    }
    if (v < lowest_price){
        lowest_price = v;
        output['cheapest'] = k;
    }
    total_price += v;
}
output['averagePrice'] = (total_price / Object.keys(carData).length);
return output;

}
// Do not write anything outside function