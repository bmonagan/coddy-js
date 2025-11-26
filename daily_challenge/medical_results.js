function processTestResults(preliminaryResults, finalResults) {
    // Write code here
    for (let i = 0; i < preliminaryResults.length; i++){
        preliminaryResults[i] = 'Status: ' + preliminaryResults[i]
    }
    for (let i = 0; i < finalResults.length; i++){
        finalResults[i] = 'Conclusion: ' + finalResults[i]
    }
    const combined = [...preliminaryResults, '---',...finalResults];
    return combined;
}
