import { drawAll } from "@/utils/DrawAll/drawAll.js";

async function cocktailShakerSort(canvas, arr, option) {
    const { length } = arr;
    let sorted = false;
    // ! ascending order
    if (option.order.value) {
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    sorted = false;
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
            if (sorted) break;
            sorted = true;
            for (let j = length - 1; j > 0; j--) {
                if (arr[j - 1] > arr[j]) {
                    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                    sorted = false;
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }
    // ! descending order
    else {
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < length - 1; i++) {
                if (arr[i] < arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    sorted = false;
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
            if (sorted) break;
            sorted = true;
            for (let j = length - 1; j > 0; j--) {
                if (arr[j - 1] < arr[j]) {
                    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                    sorted = false;
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }
    return arr;
}

export { cocktailShakerSort }