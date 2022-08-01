import { drawAll } from "@/utils/DrawAll/drawAll.js";
// https://kuangzhenfeng.github.io/sort/10.radixSort.html

// LSD, Least Significant Digit Radix Sort
// default maxDigit is 3
async function radixSort(canvas, arr, option, maxDigit = 3) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for (var j = 0; j < counter.length; j++) {
            var value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                    await drawAll(canvas, arr, option.delay.value, option.type);
                }
            }
        }
    }
    return arr;
}

export { radixSort }