<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Shell Sort -->
        <Heading
            anchor="Shell-Sort"
            content="Shell Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function shellSort(array) {
    const { length } = array;
    let [temp, gap] = [, 1];
    while (gap < length / 3) {
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < length; i++) {
            temp = array[i];
            let j = i - gap;
            for (; j >= 0 && array[j] > temp; j -= gap) {
                array[j + gap] = array[j];
            }
            array[j + gap] = temp;
        }
    }
    return array;
};"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[j] > temp\] ⟶ \[array[j] < temp\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="Note 2"
            right="Here are several data visualization of Shell Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="shellSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="shellSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="shellSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="shellSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="shellSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="shellSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
export default {
    name: "ShellSort",
};
</script>
