function mergeSettings(defaultSettings, userSettings, temporarySettings) {
    // Write your code here
    const new_settings = {...defaultSettings, ...userSettings, ...temporarySettings};
    return new_settings;
}