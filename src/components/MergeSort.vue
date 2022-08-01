<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Recursive Merge Sort -->
        <Heading
            anchor="Recursive-Merge-Sort"
            content="Recursive Merge Sort"
            heading="h2"
        ></Heading>
        <Prism :source="mergeSortRecursion"></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[left[0] < right[0]\] ⟶ \[left[0] > right[0]\]."
        ></Note>

        <!-- Non-Recursive Merge Sort-->
        <Heading
            anchor="Non-Recursive-Merge-Sort"
            content="Non-Recursive Merge Sort"
            heading="h2"
        ></Heading>
        <Prism :source="mergeSortNonRecursion"></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change \[sorted[left] <= sorted[right]\] ⟶ \[sorted[left] > sorted[right]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 3"
            right="Here are several data visualization of Merge Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="mergeSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="mergeSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
import { mergeSortRecursion } from "@/utils/SortFunction/MergeSort/mergeSortRecursion.js";
import { mergeSortNonRecursion } from "@/utils/SortFunction/MergeSort/mergeSortNonRecursion.js";

export default {
    name: "MergeSort",
    setup() {
        return {
            mergeSortRecursion,
            mergeSortNonRecursion,
        };
    },
};
</script>
