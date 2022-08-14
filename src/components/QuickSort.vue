<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Recursive Quick Sort -->
        <Heading
            anchor="Recursive-Quick-Sort"
            content="Recursive Quick Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function quickSortRecursion(array) {
    const { length } = array;
    if (length <= 1) return array;
    const pivotIndex = Math.floor(length / 2);
    let pivot = array.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[array[i] < pivot\] ⟶ \[array[i] > pivot\]."
        ></Note>

        <!-- Non-Recursive Quick -->
        <Heading
            anchor="Non-Recursive-Quick-Sort"
            content="Non-Recursive Quick Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function partitionHigh(array, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[high]] = [array[high], array[i]];
    return i;
}

function quickSortNonRecursion(array) {
    let stack = [];
    let start = 0;
    let end = array.length - 1;
    stack.push({ x: start, y: end });
    while (stack.length) {
        const { x, y } = stack.shift();
        const PI = partitionHigh(array, x, y);
        if (PI - 1 > x) {
            stack.push({ x: x, y: PI - 1 });
        }
        if (PI + 1 < y) {
            stack.push({ x: PI + 1, y: y });
        }
    }
    return array;
}"
        ></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change \[array[j] <= pivot\] ⟶ \[array[j] > pivot\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="NOTE 3"
            right="Here are several data visualization of Quick Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="quickSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="quickSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="quickSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
export default {
    name: "QuickSort",
};
</script>
