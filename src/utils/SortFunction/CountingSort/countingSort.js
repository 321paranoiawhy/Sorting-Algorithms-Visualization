function countingSort(array) {
    const max = Math.max(...array);
    const count = new Array(max + 1).fill(0);
    array.forEach((item) => count[item] += 1);
    let j = 0;
    for (let i = 0; i < max + 1; i++) {
        while (count[i]--) {
            array[j++] = i;
        }
    }
    return array;
}

export { countingSort }