import { drawAll } from "@/utils/DrawAll/drawAll.js";

async function countingSort(canvas, arr, option) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    arr.forEach((item) => count[item] += 1);
    let j = 0;
    // ! ascending order
    if (option.order.value) {
        // await can not use in forEach
        // see: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
        // count.forEach((item, index) => {
        //     while (item--) {
        //         arr[j++] = index;
        //         await drawAll(canvas, arr, option.delay.value, option.type);
        //     }
        // });
        for (let i = 0; i < max + 1; i++) {
            while (count[i]--) {
                arr[j++] = i;
                await drawAll(canvas, arr, option.delay.value, option.type);
            }
        }
    }
    // ! descending order
    else {
        for (let i = max; i >= 0; i--) {
            while (count[i]--) {
                arr[j++] = i;
                await drawAll(canvas, arr, option.delay.value, option.type);
            }
        }
    }
    return arr;
}

export { countingSort }