<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Radix Sort -->
        <Heading
            anchor="LSD-Radix-Sort"
            content="LSD Radix Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function radixSort(array, maxDigit) {
    let mod = 10;
    let dev = 1;
    const counter = [];
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < array.length; j++) {
            let bucket = parseInt((array[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    array[pos++] = value;
                }
            }
        }
    }
    return array;
}"
        ></Prism>

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
export default {
    name: "RadixSort",
};
</script>
