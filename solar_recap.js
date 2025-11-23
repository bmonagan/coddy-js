function analyzeSolarSystem(solarSystemData) {
    // Write code here
    const solar_obj = JSON.parse(solarSystemData);

    
    const entities = solar_obj.planets; 

   
    if (!Array.isArray(entities)) {
        console.error("Data structure error: Expected a 'planets' array at the top level.");
        return solarSystemData; 
    }

   
    entities.forEach((item, index) => {
        if (item.type === "rocky"){
             if (item.surfaceTemperature.max < 50){
                item['classification'] = "Potentially Habitable";
            }
            else {
                item['classification'] = "Extreme Environment";
            }

        }
        else if (item.type === "gas"){
            if (item.numberOfMoons > 10){
                item['classification'] = "Complex System";
            }
            else {
                item['classification'] = "Simple Gas Giant";
            }
           
        }
        const ageOfDiscovery = 2010 - item.discoveredIn;
        item['ageOfDiscovery'] = ageOfDiscovery;
        if (item.hasRings === true){
            if (item.numberOfMoons > 5){
                item['specialFeature'] = "Ring System with Rich Moon Population";
            }
        }

    })
    return JSON.stringify(solar_obj);
    
}
// Don't write anything outside the function