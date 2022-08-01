import { drawAll } from "@/utils/DrawAll/drawAll.js";

async function selectionSort(canvas, arr, option) {
    const { length } = arr;
    let minIndex;
    let maxIndex;

    // ! 1. ascending order and from start to end
    if (option.order.value && option.direction.value) {
        for (let i = 0; i < length - 1; i++) {
            // initialize minIndex to i
            minIndex = i;
            for (let j = i + 1; j < length; j++) {
                if (arr[j] < arr[minIndex]) {
                    // update minIndex
                    minIndex = j;
                }
            }
            // exchange arr[i] with arr[minIndex]
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 2. ascending order and from end to start
    else if (option.order.value && !option.direction.value) {
        for (let i = length - 1; i > 0; i--) {
            // initialize maxIndex to i
            maxIndex = i;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > arr[maxIndex]) {
                    // update maxIndex
                    maxIndex = j;
                }
            }
            // exchange arr[i] with arr[maxIndex]
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 3. descending order and from start to end
    else if (!option.order.value && option.direction.value) {
        for (let i = 0; i < length - 1; i++) {
            // initialize maxIndex to i
            maxIndex = i;
            for (let j = i + 1; j < length; j++) {
                if (arr[j] > arr[maxIndex]) {
                    // update maxIndex
                    maxIndex = j;
                }
            }
            // exchange arr[i] with arr[maxIndex]
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    // ! 4. descending order and from end to start
    else {
        for (let i = length - 1; i > 0; i--) {
            // initialize minIndex to i
            minIndex = i;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] < arr[minIndex]) {
                    // update minIndex
                    minIndex = j;
                }
            }
            // exchange arr[i] with arr[minIndex]
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            await drawAll(canvas, arr, option.delay.value, option.type);
        }
    }

    return arr;
}

export { selectionSort }