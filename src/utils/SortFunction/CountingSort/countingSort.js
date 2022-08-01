function countingSort(canvas, arr, option) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    arr.forEach((item) => count[item] += 1);
    let j = 0;
    for (let i = 0; i < max + 1; i++) {
        while (count[i]--) {
            arr[j++] = i;
        }
    }
    return arr;
}

export { countingSort }