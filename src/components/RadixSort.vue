<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Radix Sort -->
        <Heading
            anchor="LSD-Radix-Sort"
            content="LSD Radix Sort"
            heading="h2"
        ></Heading>
        <Prism :source="radixSort"></Prism>

        <!-- <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[j] > temp\] ⟶ \[array[j] < temp\]."
        ></Note> -->

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 1"
            right="Here are several data visualization of Radix Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="radixSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="radixSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="radixSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="radixSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="radixSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="radixSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
import { radixSort } from "@/utils/SortFunction/RadixSort/radixSort";

export default {
    name: "RadixSort",
    setup() {
        return {
            radixSort,
        };
    },
};
</script>
