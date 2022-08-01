// selectionSort (from start to end)
// ascending order

function selectionSortFromStartToEnd(array) {
    const { length } = array;
    let minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

export { selectionSortFromStartToEnd }