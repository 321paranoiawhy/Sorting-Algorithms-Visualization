<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Heap Sort -->
        <Heading anchor="Heap-Sort" content="Heap Sort" heading="h2"></Heading>
        <Prism
            source="function buildMaxHeap(array) {
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
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[heap[leftChild] > heap[index]\] ⟶ \[heap[leftChild] < heap[index]\] and \[heap[rightChild] > heap[index]\] ⟶ \[heap[rightChild] < heap[index]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 2"
            right="Here are several data visualization of Heap Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="heapSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="heapSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="heapSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="heapSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="heapSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="heapSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
export default {
    name: "HeapSort",
};
</script>
