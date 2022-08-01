// quickSort (recursion)
// ascending order
// reference: https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html

function quickSortRecursion(array) {
    const { length } = array;
    if (length <= 1) return array;
    const pivotIndex = Math.floor(length / 2);
    let pivot = array.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

export { quickSortRecursion }