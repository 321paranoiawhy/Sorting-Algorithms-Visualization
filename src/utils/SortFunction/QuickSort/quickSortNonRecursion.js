// quickSort (non-recursion)
// ascending order
// reference: https://learnersbucket.com/examples/algorithms/quick-sort-iterative/

function partitionHigh(array, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[high]] = [array[high], array[i]];
    return i;
}

function quickSortNonRecursion(array) {
    let stack = [];
    let start = 0;
    let end = array.length - 1;
    stack.push({ x: start, y: end });
    while (stack.length) {
        const { x, y } = stack.shift();
        const PI = partitionHigh(array, x, y);
        if (PI - 1 > x) {
            stack.push({ x: x, y: PI - 1 });
        }
        if (PI + 1 < y) {
            stack.push({ x: PI + 1, y: y });
        }
    }
    return array;
}

export { partitionHigh, quickSortNonRecursion }