// insertionSort (from start to end)
// ascending order

function insertionSortFromStartToEnd(array) {
    const { length } = array;
    let current;
    let prefix;
    for (let i = 1; i < length; i++) {
        current = array[i];
        prefix = i - 1;
        while (prefix >= 0 && array[prefix] > current) {
            array[prefix + 1] = array[prefix];
            prefix--;
        }
        array[prefix + 1] = current;
    }
    return array;
}

export { insertionSortFromStartToEnd }