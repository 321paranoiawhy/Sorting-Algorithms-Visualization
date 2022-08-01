// bubbleSort (inner loop from end to start)
// ascending order

function bubbleSortFromEndToStart(array) {
    const { length } = array;
    for (let i = 0; i < length - 1; i++) {
        for (let j = length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
    return array;
}

export { bubbleSortFromEndToStart }