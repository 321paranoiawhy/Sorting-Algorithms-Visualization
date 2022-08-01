import { drawAll } from "@/utils/DrawAll/drawAll.js";

// Iterative Merge Sort (Non-Recursion)
// https://www.geeksforgeeks.org/iterative-merge-sort/
// https://learnersbucket.com/examples/algorithms/iterative-merge-sort-algorithm/
// https://www.andreinc.net/2010/12/26/bottom-up-merge-sort-non-recursive


function merge(left, right, leftLimit, rightLimit, sorted, buffer, order) {
    let i = left;
    // ! ascending order
    if (order) {
        // compare the two sub arrays and merge them in the sorted order
        while (left < leftLimit && right < rightLimit) {
            if (sorted[left] <= sorted[right]) {
                buffer[i++] = sorted[left++];
            } else {
                buffer[i++] = sorted[right++];
            }
        }
    }
    // ! descending order
    else {
        // compare the two sub arrays and merge them in the sorted order
        while (left < leftLimit && right < rightLimit) {
            if (sorted[left] > sorted[right]) {
                buffer[i++] = sorted[left++];
            } else {
                buffer[i++] = sorted[right++];
            }
        }
    }
    // if there are elements in the left sub array
    // then add it to the result
    while (left < leftLimit) {
        buffer[i++] = sorted[left++];
    }
    // if there are elements in the right sub array
    // then add it to the result
    while (right < rightLimit) {
        buffer[i++] = sorted[right++];
    }
}


async function mergeSort(canvas, arr, option) {
    // create two arrays for sorting
    let sorted = Array.from(arr);
    let n = sorted.length;
    let buffer = new Array(n);
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            // get the two sub arrays
            let left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n);
            // merge the sub arrays
            merge(left, right, leftLimit, rightLimit, sorted, buffer, option.order.value);
        }
        // swap the sorted sub arrays: sorted and buffer
        [sorted, buffer] = [buffer, sorted];
        await drawAll(canvas, sorted, option.delay.value, option.type);
    }
    return sorted;
}

export { mergeSort }

// async function mergeSort(canvas, arr, option) {
//     const n = arr.length;
//     let curr_size;
//     let left_start;
//     for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
//         for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
//             let mid = Math.min(left_start + curr_size - 1, n - 1);
//             let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
//             merge(arr, left_start, mid, right_end, option);
//         }
//         await drawAll(canvas, arr, option.delay.value, option.type);
//     }
//     return arr;
// }

// function merge(arr, l, m, r, option) {
//     let i, j, k;
//     let n1 = m - l + 1;
//     let n2 = r - m;
//     let L = Array(n1).fill(0);
//     let R = Array(n2).fill(0);
//     for (i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
//     i = 0;
//     j = 0;
//     k = l;
//     // ascending order
//     if (option.order.value) {
//         while (i < n1 && j < n2) {
//             if (L[i] <= R[j]) {
//                 arr[k] = L[i];
//                 i++;
//             } else {
//                 arr[k] = R[j];
//                 j++;
//             }
//             k++;
//         }
//     }
//     // descending order
//     else {
//         while (i < n1 && j < n2) {
//             if (L[i] > R[j]) {
//                 arr[k] = L[i];
//                 i++;
//             } else {
//                 arr[k] = R[j];
//                 j++;
//             }
//             k++;
//         }
//     }
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// export { mergeSort }