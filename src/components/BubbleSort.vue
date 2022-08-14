<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- <TOC :content="[1, 2, 3, 3.1, 3.2, 3.3, 3.4, 3.5]"></TOC> -->

        <!-- Bubble Sort from Start to End -->
        <Heading
            anchor="Bubble-Sort-from-Start-to-End"
            content="Bubble Sort from Start to End"
            heading="h2"
        ></Heading>
        <Prism
            source="function bubbleSortFromStartToEnd(array) {
    const { length } = array;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change the inequality sign of \[array[j] > array[j + 1]\] to the opposite of it ⟶ \[array[j] < array[j + 1]\]."
        ></Note>

        <!-- Bubble Sort from End to Start -->
        <Heading
            anchor="Bubble-Sort-from-End-to-Start"
            content="Bubble Sort from End to Start"
            heading="h2"
        ></Heading>
        <Prism
            source="function bubbleSortFromEndToStart(array) {
    const { length } = array;
    for (let i = 0; i < length - 1; i++) {
        for (let j = length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
    return array;
}"
        ></Prism>
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
            left="NOTE 3"
            right="Here are several data visualization of Selection Sort Algorithm."
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
export default {
    name: "BubbleSort",
};
</script>
