<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Insertion Sort from Start to End -->
        <Heading
            anchor="Insertion-Sort-from-Start-to-End"
            content="Insertion Sort from Start to End"
            heading="h2"
        ></Heading>
        <Prism
            source="function insertionSortFromStartToEnd(array) {
    const { length } = array;
    let current;
    let prefix;
    for (let i = 1; i < length; i++) {
        current = array[i];
        prefix = i - 1;
        while (prefix >= 0 && array[prefix] > current) {
            array[prefix + 1] = array[prefix];
            prefix--;
        }
        array[prefix + 1] = current;
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[prefix] > current\] ⟶ \[array[prefix] < current\]."
        ></Note>

        <!-- Insertion Sort from End to Start -->
        <Heading
            anchor="Insertion-Sort-from-End-to-Start"
            content="Insertion Sort from End to Start"
            heading="h2"
        ></Heading>
        <Prism
            source="function insertionSortFromEndToStart(array) {
    const { length } = array;
    let current;
    let suffix;
    for (let i = length - 2; i >= 0; i--) {
        current = array[i];
        suffix = i + 1;
        while (suffix <= length - 1 && array[suffix] < current) {
            array[suffix - 1] = array[suffix];
            suffix++;
        }
        array[suffix - 1] = current;
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change \[array[suffix] < current\] ⟶ \[array[suffix] > current\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 3"
            right="Here are several data visualization of Insertion Sort Algorithm."
        ></Note>

        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls sortFunction="insertionSort" type="circle"></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls sortFunction="insertionSort" type="scatter2Line"></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls sortFunction="insertionSort" type="scatter2Spiral"></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls sortFunction="insertionSort" type="needle"></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls sortFunction="insertionSort" type="waveform"></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls sortFunction="insertionSort" type="histogram"></Controls>
    </div>
</template>

<script>
export default {
    name: "InsertionSort",
    setup() {
        console.log("InsertionSort");
    },
};
</script>
