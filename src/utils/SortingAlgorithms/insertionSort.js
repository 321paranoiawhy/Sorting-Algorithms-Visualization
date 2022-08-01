import { drawAll } from "@/utils/DrawAll/drawAll.js";

async function insertionSort(canvas, arr, option) {
    const { length } = arr;

    // ! 1. ascending order and from start to end
    if (option.order.value && option.direction.value) {
        let current;
        let prefix;
        for (let i = 1; i < length; i++) {
            current = arr[i];
            prefix = i - 1;
            while (prefix >= 0 && arr[prefix] > current) {
                arr[prefix + 1] = arr[prefix];
                prefix--;
            }
            arr[prefix + 1] = current;
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 2. ascending order and from end to start
    else if (option.order.value && !option.direction.value) {
        let current;
        let suffix;
        for (let i = length - 2; i >= 0; i--) {
            current = arr[i];
            suffix = i + 1;
            while (suffix <= length - 1 && arr[suffix] < current) {
                arr[suffix - 1] = arr[suffix];
                suffix++;
            }
            arr[suffix - 1] = current;
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 3. descending order and from start to end
    else if (!option.order.value && option.direction.value) {
        let current;
        let prefix;
        for (let i = 1; i < length; i++) {
            current = arr[i];
            prefix = i - 1;
            while (prefix >= 0 && arr[prefix] < current) {
                arr[prefix + 1] = arr[prefix];
                prefix--;
            }
            arr[prefix + 1] = current;
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 4. descending order and from end to start
    else {
        let current;
        let suffix;
        for (let i = length - 2; i >= 0; i--) {
            current = arr[i];
            suffix = i + 1;
            while (suffix <= length - 1 && arr[suffix] > current) {
                arr[suffix - 1] = arr[suffix];
                suffix++;
            }
            arr[suffix - 1] = current;
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    return arr;
}

export { insertionSort }