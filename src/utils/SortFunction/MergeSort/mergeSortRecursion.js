// mergeSort (recursion)
// ascending order
// reference: https://segmentfault.com/a/1190000008866524

function mergeSortRecursion(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

function mergeSort(array) {
    const { length } = array;
    if (length === 1) return array;
    let mid = Math.floor(length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

export { mergeSortRecursion, mergeSort }