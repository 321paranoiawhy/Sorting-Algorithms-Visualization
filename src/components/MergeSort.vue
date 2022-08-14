<template>
    <div>
        <BottomRightNav></BottomRightNav>
        <!-- Recursive Merge Sort -->
        <Heading
            anchor="Recursive-Merge-Sort"
            content="Recursive Merge Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function mergeSortRecursion(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

function mergeSort(array) {
    const { length } = array;
    if (length === 1) return array;
    let mid = Math.floor(length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}"
        ></Prism>
        <Note
            left="NOTE 1"
            right="Descending Order: just change \[left[0] < right[0]\] ⟶ \[left[0] > right[0]\]."
        ></Note>

        <!-- Non-Recursive Merge Sort-->
        <Heading
            anchor="Non-Recursive-Merge-Sort"
            content="Non-Recursive Merge Sort"
            heading="h2"
        ></Heading>
        <Prism
            source="function mergeSortNonRecursion(array) {
    function merge(left, right, leftLimit, rightLimit, sorted, buffer) {
        let i = left;
        while (left < leftLimit && right < rightLimit) {
            if (sorted[left] <= sorted[right]) {
                buffer[i++] = sorted[left++];
            } else {
                buffer[i++] = sorted[right++];
            }
        }
        while (left < leftLimit) {
            buffer[i++] = sorted[left++];
        }
        while (right < rightLimit) {
            buffer[i++] = sorted[right++];
        }
    }
    let sorted = Array.from(array);
    let n = sorted.length;
    let buffer = new Array(n);
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            let left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n);
            merge(left, right, leftLimit, rightLimit, sorted, buffer);
        }
        [sorted, buffer] = [buffer, sorted];
    }
    return sorted;
}"
        ></Prism>
        <Note
            left="NOTE 2"
            right="Descending Order: just change \[sorted[left] <= sorted[right]\] ⟶ \[sorted[left] > sorted[right]\]."
        ></Note>

        <!-- Algorithm Visualization -->
        <Heading
            anchor="Algorithm-Visualization"
            content="Algorithm Visualization"
            heading="h2"
        ></Heading>
        <Note
            left="NOTE 3"
            right="Here are several data visualization of Merge Sort Algorithm."
        ></Note>

        <!-- Controls with no direction switch, just have order switch -->
        <Heading anchor="Circle" content="Circle" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="circle"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Line"
            content="Scatter to Line"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="mergeSort"
            type="scatter2Line"
            :directionSwitch="false"
        ></Controls>

        <Heading
            anchor="Scatter-to-Spiral"
            content="Scatter to Spiral"
            heading="h3"
        ></Heading>
        <Controls
            sortFunction="mergeSort"
            type="scatter2Spiral"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Needle" content="Needle" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="needle"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Waveform" content="Waveform" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="waveform"
            :directionSwitch="false"
        ></Controls>

        <Heading anchor="Histogram" content="Histogram" heading="h3"></Heading>
        <Controls
            sortFunction="mergeSort"
            type="histogram"
            :directionSwitch="false"
        ></Controls>
    </div>
</template>

<script>
export default {
    name: "MergeSort",
};
</script>
