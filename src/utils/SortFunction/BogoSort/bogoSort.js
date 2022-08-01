function bogoSort(array) {
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    function shuffle(array) {
        const { length } = array;
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * length);
            swap(array, i, randomIndex);
        }
    }
    function isSorted(array) {
        const { length } = array;
        return array.every((item, index) => item <= array[index + 1] || index === length - 1);
    }
    let sorted = false;
    while (!sorted) {
        shuffle(array);
        sorted = isSorted(array);
    }
    return array;
}

export { bogoSort }