function doubleOdds(numbers) {
    for (let i = 0; i < numbers.length;i++){
        if (numbers[i] % 2 == 1){
            numbers[i] *= 2;
        }
    }
    return numbers;
}