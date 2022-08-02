// https://vhudyma-blog.eu/2020-09-22-algorithms-heap-sort-in-javascript/

function buildMaxHeap(array) {
    let i = Math.floor(array.length / 2 - 1);
    while (i >= 0) {
        heapify(array, i, array.length);
        i--;
    }
}

function heapify(heap, i, max) {
    let index;
    let leftChild;
    let rightChild;
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

function swap(array, firstItemIndex, lastItemIndex) {
    [array[firstItemIndex], array[lastItemIndex]] = [array[lastItemIndex], array[firstItemIndex]];
}

function heapSort(array) {
    buildMaxHeap(array);
    lastIndex = array.length - 1;
    while (lastIndex > 0) {
        swap(array, 0, lastIndex);
        heapify(array, 0, lastIndex);
        lastIndex--;
    }
    return array;
}

export { heapSort }