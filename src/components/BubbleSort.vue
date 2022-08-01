<template>
    <!-- [Vue warn]: Component inside <Transition> renders non-element root node that cannot be animated. -->
    <!-- https://stackoverflow.com/questions/65553121/vue-3-transition-renders-non-element-root-node-that-cannot-be-animated -->
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- <TOC
            :content="[1, 2, 3, 3.1, 3.2, 3.3, 3.4, 3.5]"
            :anchor="[
                'Bubble-from-Start-to-End',
                'Bubble-from-End-to-Start',
                'Algorithm-Visualization',
                'Circle',
                'Scatter-to-Line',
                'Scatter-to-Spiral',
                'Needle',
                'Waveform',
            ]"
            :level="[1, 1, 1, 2, 2, 2, 2, 2]"
        ></TOC> -->

        <!-- <Square></Square> -->

        <!-- Bubble from Start to End -->
        <Heading
            anchor="Bubble-from-Start-to-End"
            content="Bubble from Start to End"
            heading="h2"
        ></Heading>

        <Prism :source="bubbleSortFromStartToEnd"></Prism>

        <Note
            left="NOTE 1"
            right="Descending Order: just change the inequality sign of \[array[j] > array[j + 1]\] to the opposite of it ⟶ \[array[j] < array[j + 1]\]."
        ></Note>

        <!-- Bubble from End to Start -->
        <Heading
            anchor="Bubble-from-End-to-Start"
            content="Bubble from End to Start"
            heading="h2"
        ></Heading>
        <Prism :source="bubbleSortFromEndToStart"></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change the inequality sign of \[array[j] < array[j - 1]\] to the opposite of it ⟶ \[array[j] > array[j - 1]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 3"
            right="Here are several data visualization of Bubble Sort Algorithm."
        ></Note>

        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls sortFunction="bubbleSort" type="circle"></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls sortFunction="bubbleSort" type="scatter2Line"></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls sortFunction="bubbleSort" type="scatter2Spiral"></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls sortFunction="bubbleSort" type="needle"></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls sortFunction="bubbleSort" type="waveform"></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls sortFunction="bubbleSort" type="histogram"></Controls>
    </div>
</template>

<script>
import { bubbleSortFromStartToEnd } from "@/utils/SortFunction/BubbleSort/bubbleSortFromStartToEnd.js";
import { bubbleSortFromEndToStart } from "@/utils/SortFunction/BubbleSort/bubbleSortFromEndToStart.js";

// import Square from "@/components/Square.vue";

export default {
    name: "BubbleSort",
    components: {
        // Square,
    },
    setup() {
        return {
            bubbleSortFromStartToEnd,
            bubbleSortFromEndToStart,
        };
    },
};
</script>
