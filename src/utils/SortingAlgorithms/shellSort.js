import { drawAll } from "@/utils/DrawAll/drawAll.js";

async function shellSort(canvas, arr, option) {
    const { length } = arr;
    let [temp, gap] = [, 1];
    // ! ascending order
    if (option.order.value) {
        while (gap < length / 3) {
            gap = gap * 3 + 1;
        }
        for (gap; gap > 0; gap = Math.floor(gap / 3)) {
            for (let i = gap; i < length; i++) {
                temp = arr[i];
                let j = i - gap;
                for (; j >= 0 && arr[j] > temp; j -= gap) {
                    arr[j + gap] = arr[j];
                }
                arr[j + gap] = temp;
                await drawAll(canvas, arr, option.delay.value, option.type);
            }
        }
    }
    // ! descending order
    else {
        while (gap < length / 3) {
            gap = gap * 3 + 1;
        }
        for (gap; gap > 0; gap = Math.floor(gap / 3)) {
            for (let i = gap; i < length; i++) {
                temp = arr[i];
                let j = i - gap;
                for (; j >= 0 && arr[j] < temp; j -= gap) {
                    arr[j + gap] = arr[j];
                }
                arr[j + gap] = temp;
                await drawAll(canvas, arr, option.delay.value, option.type);
            }
        }
    }
    return arr;
};

export { shellSort }