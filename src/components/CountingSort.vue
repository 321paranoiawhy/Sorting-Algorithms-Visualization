<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Counting Sort -->
        <Heading
            anchor="Counting-Sort"
            content="Counting Sort"
            heading="h2"
        ></Heading>
        <Prism :source="countingSort"></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[let i = 0\] ⟶ \[let i = max\] and \[i < max + 1\] ⟶ \[i >= 0\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 2"
            right="Here are several data visualization of Counting Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="countingSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="countingSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="countingSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="countingSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="countingSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="countingSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
import { countingSort } from "@/utils/SortFunction/CountingSort/countingSort";

export default {
    name: "CountingSort",
    setup() {
        return {
            countingSort,
        };
    },
};
</script>
