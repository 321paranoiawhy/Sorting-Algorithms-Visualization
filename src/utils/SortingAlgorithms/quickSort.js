import { drawAll } from "@/utils/DrawAll/drawAll.js";

// Iterative Quick Sort (Non-Recursion)
// Reference: https://learnersbucket.com/examples/algorithms/quick-sort-iterative/


function partitionHigh(arr, low, high, order) {
    // pick the first element as pivot
    let pivot = arr[high];
    let i = low;
    // ! ascending order
    if (order) {
        // partition the array into two parts using the pivot
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
    }
    // ! descending order
    else {
        // partition the array into two parts using the pivot
        for (let j = low; j < high; j++) {
            if (arr[j] > pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    // return the pivot index
    return i;
}


async function quickSort(canvas, arr, option) {
    // stack for storing start and end index
    let stack = [];
    // get the start and end index
    let start = 0;
    let end = arr.length - 1;
    // push start and end index in the stack
    stack.push({ x: start, y: end });
    // iterate the stack
    while (stack.length) {
        // get the start and end from the stack
        const { x, y } = stack.shift();
        // partition the array along the pivot
        const PI = partitionHigh(arr, x, y, option.order.value);
        // push sub array with less elements than pivot into the stack
        if (PI - 1 > x) {
            stack.push({ x: x, y: PI - 1 });
        }
        // push sub array with greater elements than pivot into the stack
        if (PI + 1 < y) {
            stack.push({ x: PI + 1, y: y });
        }
        await drawAll(canvas, arr, option.delay.value, option.type);
    }
    return arr;
}

export { quickSort }