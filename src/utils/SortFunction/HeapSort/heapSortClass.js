// https://stackabuse.com/heap-sort-in-javascript/

function heapSortClass(array) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
        parentIndex(index) {
            return Math.floor((index - 1) / 2);
        }
        leftChildIndex(index) {
            return (2 * index + 1);
        }
        rightChildIndex(index) {
            return (2 * index + 2);
        }
        swap(a, b) {
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }
        insert(item) {
            this.heap.push(item);
            let index = this.heap.length - 1;
            let parent = this.parentIndex(index);
            while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = this.parentIndex(index);
                parent = this.parentIndex(index);
            }
        }
        delete() {
            let item = this.heap.shift();
            this.heap.unshift(this.heap.pop());
            let index = 0;
            let leftChild = this.leftChildIndex(index);
            let rightChild = this.rightChildIndex(index);
            while (this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]) {
                let max = leftChild;
                if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
                    max = rightChild
                }
                this.swap(max, index);
                index = max;
                leftChild = this.leftChildIndex(max);
                rightChild = this.rightChildIndex(max);
            }
            return item;
        }
    }
    const { length } = arr;
    let sorted = [];
    let heap = new MaxHeap();
    for (let i = 0; i < length; i++) {
        heap.insert(arr[i]);
        console.log(heap);
    }
    for (let i = 0; i < length; i++) {
        sorted.push(heap.delete());
    }
    return sorted;
}

export { heapSortClass }