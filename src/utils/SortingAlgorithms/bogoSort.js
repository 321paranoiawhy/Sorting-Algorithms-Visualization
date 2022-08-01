import { drawAll } from "@/utils/DrawAll/drawAll.js";

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function shuffle(arr) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * length);
        swap(arr, i, randomIndex);
    }
}

function isSorted(arr, option) {
    const { length } = arr;
    // ! ascending order
    if (option.order.value) {
        return arr.every((item, index) => item <= arr[index + 1] || index === length - 1);
    }
    // ! descending order
    else {
        return arr.every((item, index) => item >= arr[index + 1] || index === length - 1);
    }
}

async function bogoSort(canvas, arr, option) {
    let sorted = false;
    while (!sorted) {
        shuffle(arr);
        await drawAll(canvas, arr, option.delay.value, option.type);
        sorted = isSorted(arr, option);
    }
    return arr;
}

export { bogoSort }