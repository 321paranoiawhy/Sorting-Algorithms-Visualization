<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Heap Sort -->
        <Heading anchor="Heap-Sort" content="Heap Sort" heading="h2"></Heading>
        <Prism :source="heapSortFunction"></Prism>
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
import { heapSortFunction } from "@/utils/SortFunction/HeapSort/heapSortFunction";
import { heapSortClass } from "@/utils/SortFunction/HeapSort/heapSortClass";

export default {
    name: "HeapSort",
    setup() {
        return {
            heapSortFunction,
            heapSortClass,
        };
    },
};
</script>
