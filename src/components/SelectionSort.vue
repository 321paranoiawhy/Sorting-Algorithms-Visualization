<template>
    <div>
        <BottomRightNav></BottomRightNav>

        <!-- Selection Sort from Start to End -->
        <Heading
            anchor="Selection-Sort-from-Start-to-End"
            content="Selection Sort from Start to End"
            heading="h2"
        ></Heading>
        <Prism
            source="function selectionSortFromStartToEnd(array) {
    const { length } = array;
    let minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change all \[minIndex\] ⟶ \[maxIndex\], and \[array[j] < array[minIndex]\] ⟶ \[array[j] > array[maxIndex]\]."
        ></Note>

        <!-- Selection Sort from End to Start -->
        <Heading
            anchor="Selection-Sort-from-End-to-Start"
            content="Selection Sort from End to Start"
            heading="h2"
        ></Heading>
        <Prism
            source="function selectionSortFromEndToStart(array) {
    const { length } = array;
    let maxIndex;
    for (let i = length - 1; i > 0; i--) {
        maxIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change all \[maxIndex\] ⟶ \[minIndex\], and \[array[j] > array[maxIndex]\] ⟶ \[array[j] < array[minIndex]\]."
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
        <Controls sortFunction="selectionSort" type="circle"></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls sortFunction="selectionSort" type="scatter2Line"></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls sortFunction="selectionSort" type="scatter2Spiral"></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls sortFunction="selectionSort" type="needle"></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls sortFunction="selectionSort" type="waveform"></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls sortFunction="selectionSort" type="histogram"></Controls>
    </div>
</template>

<script>
export default {
    name: "SelectionSort",
};
</script>
