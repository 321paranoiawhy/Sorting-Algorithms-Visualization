// selectionSort (from end to start)
// ascending order

function selectionSortFromEndToStart(array) {
    const { length } = array;
    let maxIndex;
    for (let i = length - 1; i > 0; i--) {
        maxIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
    }
    return array;
}

export { selectionSortFromEndToStart }