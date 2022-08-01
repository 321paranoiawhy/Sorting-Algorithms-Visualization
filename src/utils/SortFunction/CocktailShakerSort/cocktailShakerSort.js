// https://stackabuse.com/bubble-sort-and-cocktail-shaker-sort-in-javascript/

function cocktailShakerSort(array) {
    const { length } = array;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
        if (sorted) break;
        sorted = true;
        for (let j = length - 1; j > 0; j--) {
            if (array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                sorted = false;
            }
        }
    }
    return array;
}

export { cocktailShakerSort }