function countVowels(str) {
    // Write code here
    let vowel_count = 0;
    for (const char of str){
        if ('aeiouAEIOU'.includes(char)){
            vowel_count++;
        }
    }
    return vowel_count;
}