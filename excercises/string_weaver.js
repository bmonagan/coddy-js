function stringWeaver(str1, str2) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    // Remove numbers from both strings
    let cleanStr1 = '';
    let cleanStr2 = '';
    
    for (let i = 0; i < str1.length; i++) {
        if (!numbers.includes(str1[i])) {
            cleanStr1 += str1[i];
        }
    }
    
    for (let i = 0; i < str2.length; i++) {
        if (!numbers.includes(str2[i])) {
            cleanStr2 += str2[i];
        }
    }
    
    let result = '';
    let i = 0;
    
    // Alternate characters while both strings have characters
    while (i < cleanStr1.length && i < cleanStr2.length) {
        // Add character from first string
        let char1 = cleanStr1[i];
        if (vowels.includes(char1)) {
            char1 = char1.toUpperCase();
        }
        result += char1;
        
        // Add character from second string
        let char2 = cleanStr2[i];
        if (vowels.includes(char2)) {
            char2 = char2.toUpperCase();
        }
        result += char2;
        
        i++;
    }
    
    // Add remaining characters from longer string
    let remaining = cleanStr1.length > cleanStr2.length ? cleanStr1.slice(i) : cleanStr2.slice(i);
    for (let j = 0; j < remaining.length; j++) {
        let char = remaining[j];
        if (vowels.includes(char)) {
            char = char.toUpperCase();
        }
        result += char;
    }
    
    return result;
}