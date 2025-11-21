function petShelterManager(shelterData, newData) {
    // Create a copy of shelterData to avoid modifying the original
    let updatedShelter = [];
    for (let i = 0; i < shelterData.length; i++) {
        updatedShelter.push(shelterData[i]);
    }

    if (newData.id === undefined || 
        newData.name === undefined || 
        newData.type === undefined || 
        newData.age === undefined || 
        newData.isVaccinated === undefined || 
        newData.adoptionStatus === undefined) {
        return updatedShelter;
    }
    
    updatedShelter.push(newData);
    return updatedShelter;
}