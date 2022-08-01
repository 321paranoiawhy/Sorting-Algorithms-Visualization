// insertionSort (from end to start)
// ascending order

function insertionSortFromEndToStart(array) {
    const { length } = array;
    let current;
    let suffix;
    for (let i = length - 2; i >= 0; i--) {
        current = array[i];
        suffix = i + 1;
        while (suffix <= length - 1 && array[suffix] < current) {
            array[suffix - 1] = array[suffix];
            suffix++;
        }
        array[suffix - 1] = current;
    }
    return array;
}

export { insertionSortFromEndToStart }