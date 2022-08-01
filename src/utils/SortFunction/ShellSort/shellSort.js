function shellSort(array) {
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
};

export { shellSort }