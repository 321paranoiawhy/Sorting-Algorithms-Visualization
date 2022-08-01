import { drawAll } from "@/utils/DrawAll/drawAll.js";

// https://vhudyma-blog.eu/2020-09-22-algorithms-heap-sort-in-javascript/

function buildMaxHeap(arr, option) {
    let i = Math.floor(arr.length / 2 - 1);
    while (i >= 0) {
        heapify(arr, i, arr.length, option);
        i--;
    }
}

function heapify(heap, i, max, option) {
    let index;
    let leftChild;
    let rightChild;
    // ! ascending order
    if (option.order.value) {
        while (i < max) {
            index = i;
            leftChild = 2 * i + 1;
            rightChild = leftChild + 1;
            if (leftChild < max && heap[leftChild] > heap[index]) {
                index = leftChild;
            }
            if (rightChild < max && heap[rightChild] > heap[index]) {
                index = rightChild;
            }
            if (index === i) {
                return;
            }
            swap(heap, i, index);
            i = index;
        }
    }
    // ! descending order
    else {
        while (i < max) {
            index = i;
            leftChild = 2 * i + 1;
            rightChild = leftChild + 1;
            if (leftChild < max && heap[leftChild] < heap[index]) {
                index = leftChild;
            }
            if (rightChild < max && heap[rightChild] < heap[index]) {
                index = rightChild;
            }
            if (index === i) {
                return;
            }
            swap(heap, i, index);
            i = index;
        }
    }
}

function swap(arr, firstItemIndex, lastItemIndex) {
    [arr[firstItemIndex], arr[lastItemIndex]] = [arr[lastItemIndex], arr[firstItemIndex]];
}

async function heapSort(canvas, arr, option) {
    buildMaxHeap(arr, option);
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) {
        swap(arr, 0, lastIndex);
        heapify(arr, 0, lastIndex, option);
        lastIndex -= 1;
        await drawAll(canvas, arr, option.delay.value, option.type);
    }
    return arr;
}

export { heapSort }