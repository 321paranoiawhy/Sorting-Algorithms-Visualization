<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Recursive Quick Sort -->
        <Heading
            anchor="Recursive-Quick-Sort"
            content="Recursive Quick Sort"
            heading="h2"
        ></Heading>
        <Prism :source="quickSortRecursion"></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[i] < pivot\] ⟶ \[array[i] > pivot\]."
        ></Note>

        <!-- Non-Recursive Quick -->
        <Heading
            anchor="Non-Recursive-Quick-Sort"
            content="Non-Recursive Quick Sort"
            heading="h2"
        ></Heading>
        <Prism :source="quickSortNonRecursion"></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change \[array[j] <= pivot\] ⟶ \[array[j] > pivot\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 3"
            right="Here are several data visualization of Quick Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="quickSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="quickSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
import { quickSortRecursion } from "@/utils/SortFunction/QuickSort/quickSortRecursion.js";
import { quickSortNonRecursion } from "@/utils/SortFunction/QuickSort/quickSortNonRecursion.js";

export default {
    name: "QuickSort",
    setup() {
        return {
            quickSortRecursion,
            quickSortNonRecursion,
        };
    },
};
</script>
