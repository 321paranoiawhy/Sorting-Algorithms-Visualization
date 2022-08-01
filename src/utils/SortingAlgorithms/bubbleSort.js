import { drawAll } from "@/utils/DrawAll/drawAll.js";
// TODO
import store from "@/store/index.js";

async function bubbleSort(canvas, arr, option) {
    const { length } = arr;

    // ! 1. ascending order and from start to end
    if (option.order.value && option.direction.value) {
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
            // setTimeout(() => {
            //     store.commit("getDynamicArr", arr);
            // }, option.delay.value);
            if (option.type === "square") await store.commit("getDynamicArr", arr);
        }
    }

    // ! 2. ascending order and from end to start
    else if (option.order.value && !option.direction.value) {
        for (let i = 0; i < length - 1; i++) {
            for (let j = length - 1; j > i; j--) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
            if (option.type === "square") await store.commit("getDynamicArr", arr);
        }
    }

    // ! 3. descending order and from start to end
    else if (!option.order.value && option.direction.value) {
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 4. descending order and from end to start
    else {
        for (let i = 0; i < length - 1; i++) {
            for (let j = length - 1; j > i; j--) {
                if (arr[j] > arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    return arr;
}

export { bubbleSort }