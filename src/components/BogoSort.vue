<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Bogo Sort -->
        <Heading
            anchor="Bogo-Sort-Just-for-Fun"
            content="Bogo Sort Just for Fun"
            heading="h2"
        ></Heading>
        <Prism
            source="function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

function shuffle(array) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        swap(array, i, randomIndex);
    }
}

function isSorted(array) {
    const { length } = array;
    return array.every((item, index) => item <= array[index + 1] || index === length - 1);
}

function bogoSort(array) {
    let sorted = false;
    while (!sorted) {
        shuffle(array);
        sorted = isSorted(array);
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[item <= array[index + 1]\] ⟶ \[item >= array[index + 1]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 2"
            right="Here are several data visualization of Bogo Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="bogoSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="bogoSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="bogoSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="bogoSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="bogoSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="bogoSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
export default {
    name: "BogoSort",
};
</script>
