function forestHikeDecision(weather, energyLevel, daylight) {
    if (energyLevel < 30){
        return "Take a break";
    } else if (weather == 'sunny' && energyLevel > 70){
        return "Continue hiking";
    } else if (weather == 'rainy' && daylight == false){
        return "Set up camp";
    } else if ( weather == "foggy" && daylight == true){
        return "Proceed with caution";
    } else{
        return "Assess the situation";
    }
}
